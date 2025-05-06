// app.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Directories
const uploadsDir = path.join(__dirname, 'uploads');
const resolvedDir = path.join(__dirname, 'resolved');

// Make sure folders exist
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
if (!fs.existsSync(resolvedDir)) fs.mkdirSync(resolvedDir);

// Serve static files
app.use('/uploads', express.static(uploadsDir));
app.use('/resolved', express.static(resolvedDir));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file names
  }
});
const upload = multer({ storage: storage });

// In-memory database
let reports = [];

// POST: Upload new report
app.post('/upload', upload.single('photo'), (req, res) => {
  const { latitude, longitude } = req.body;
  if (!req.file) return res.status(400).send('Photo not uploaded');

  const photoPath = `uploads/${req.file.filename}`;

  const newReport = {
    photoPath,
    latitude,
    longitude,
    timestamp: new Date().toISOString(),
    resolved: false,
    notes: ''
  };

  reports.push(newReport);

  console.log('New crime report:', newReport);
  res.send('Report uploaded successfully.');
});

// GET: Fetch all reports
app.get('/reports', (req, res) => {
  res.json(reports);
});

// PUT: Mark report as resolved
app.put('/reports/:timestamp', (req, res) => {
  const { timestamp } = req.params;
  const { notes } = req.body;

  const reportIndex = reports.findIndex(r => r.timestamp === timestamp);
  if (reportIndex === -1) return res.status(404).send('Report not found');

  const report = reports[reportIndex];
  const oldPath = path.join(__dirname, report.photoPath);
  const fileName = path.basename(report.photoPath);
  const newPath = path.join(resolvedDir, fileName);

  // Move file from uploads to resolved
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error('Failed to move file:', err);
      return res.status(500).send('Error moving file.');
    }

    // Update report status
    report.photoPath = `resolved/${fileName}`;
    report.resolved = true;
    report.notes = notes || 'Marked as resolved.';
    report.resolvedAt = new Date().toISOString();

    res.send('Report marked as resolved.');
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
