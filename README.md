# EyeWitness_cam
A web-based platform that lets users capture or upload photos of a crime scene and instantly send them to the police. Designed to improve public safety through real-time visual reporting with location.


# EyeWitness Cam - Crime Alert System 🚨

EyeWitness Cam is a real-time crime reporting and alert system built using Flask. It allows users to report crimes by capturing photos, location, and timestamp, while the police dashboard receives live notifications and allows marking cases as resolved.

## 🔧 Features

- 📸 Users can submit reports with photos and location
- 🚓 Police dashboard to view reports and mark them as resolved
- 🔔 Real-time notification alert for new reports
- 🗂️ Separate view for unresolved and resolved cases
- 🗺️ Integrated Google Maps location viewer
- 🔊 Audio alert for new crimes

## 🧩 Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Flask (Python)
- Storage: Local filesystem (uploads & resolved folders)

## 🛠️ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Gautham44/EyeWitness_cam.git
   cd EyeWitness_cam



## install dependencies:
pip install flask

## Start the Flask server:
python app.py

## Open the browser and navigate to:
User reporting: http://localhost:3000
Police dashboard: http://localhost:3000/police

## Folder Structure:
crime-alert-website/
│
├── static/
│   └── uploads/          # New crime photos
│   └── resolved/         # Resolved crime photos
├── templates/
│   ├── index.html        # User report form
│   └── police.html       # Police dashboard
├── app.py                # Flask backend
├── README.md
└── requirements.txt      # Optional: List of dependencies
