# EyeWitness Cam - Crime Alert System 🚨

EyeWitness Cam is a real-time crime reporting and alert system built using Flask. It allows users to report crimes by capturing photos, location, and timestamp, while the police dashboard receives live notifications and allows marking cases as resolved.

## 🔧 Features

- 📸 Users can submit reports with photos and location
- 🚓 Police dashboard to view reports and mark them as resolved
- 🔔 Real-time notification alert for new reports
- 🗂️ Separate view for unresolved and resolved cases
- 🗺️ Integrated Google Maps location viewer
- 🔊 Audio alert for new crimes

## Google Maps API Key Setup

To use the map functionality in this project, you'll need to obtain a Google Maps API key. Follow the steps below to set it up:

### Steps to get a Google Maps API Key:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Navigate to the **APIs & Services** section.
4. Enable the **Google Maps JavaScript API** and any other required APIs (such as Geocoding API).
5. Once enabled, go to the **Credentials** tab.
6. Click on **Create Credentials** and select **API Key**.
7. A new API key will be generated. Copy this key.

### Add the API Key to Your Project

1. Open the project folder and locate the file where the Google Maps API is being loaded (in your case, the section where the `iframe` URL is generated with the Google Maps link).
2. Replace the part of the code that refers to Google Maps API with your API key.

For example, you might need to modify this URL in your code:
html
<iframe src="https://www.google.com/maps?q=${report.latitude},${report.longitude}&hl=es;z=14&output=embed&key=YOUR_GOOGLE_MAPS_API_KEY" loading="lazy"></iframe>


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

```
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
```
