

# Fetch Monitor Dashboard

## Overview
The Fetch Monitor Dashboard is a web-based tool developed in Python using Flask. It monitors the availability of specified web endpoints and visualizes the results in an interactive dashboard. This project is designed for users who want to keep track of their web service uptime easily.

## Features
- Configurable Endpoints**: Users can define multiple endpoints to monitor via a YAML configuration file.
- Periodic Monitoring: The application checks the availability of each endpoint at regular intervals.
- Data Visualization: Users can view endpoint availability through a dynamic bar chart on a web dashboard.
- Extensible Design: The architecture allows for easy addition of more features or endpoints.

## Technologies Used
- Python 3.x: The primary programming language.
- Flask: A lightweight web framework for building the application.
- Requests: A Python library for sending HTTP requests.
- PyYAML: A library for parsing YAML configuration files.
- Chart.js: A JavaScript library for rendering dynamic charts.
- HTML/CSS/JavaScript: Frontend technologies for building the dashboard interface.

## Prerequisites
Before running the application, ensure that you have the following installed on your machine:

1. Python 3.x: Download and install Python from [python.org](https://www.python.org/downloads/). Make sure to check the option to add Python to your system PATH during installation.
2. pip: This is the package manager for Python. It typically comes pre-installed with Python. You can check if it's installed by running the command `pip --version` in your terminal.

## Setup Instructions

### Step 1: Clone the Repository
Open a terminal or command prompt and clone the project repository using Git:

```bash
git clone https://github.com/yourusername/fetch-monitor-dashboard.git
cd fetch-monitor-dashboard
```

### Step 2: Install Dependencies
Use pip to install the required Python libraries. Run the following command in your terminal:

```bash
pip install -r requirements.txt
```

This command installs all the dependencies specified in the `requirements.txt` file, which includes Flask, Requests, and PyYAML.

### Step 3: Configure Endpoints
Create a file named `endpoints.yaml` in the root directory of the project. This file will define the endpoints you wish to monitor.

#### Example `endpoints.yaml`:
```yaml
- url: "https://fetch.com"
  method: "GET"
- url: "https://www.fetchrewards.com"
  method: "GET"
```

### Step 4: Run the Application
Start the Flask application by running the following command in your terminal:

```bash
python app.py
```

### Step 5: Access the Dashboard
Open your web browser and navigate to `http://127.0.0.1:5000`. This URL will display the Fetch Monitor Dashboard.

## Detailed Functionality

### Monitoring Logic (`monitor.py`)
- The monitoring script reads the `endpoints.yaml` file to retrieve the list of endpoints.
- It sends HTTP requests to each endpoint at defined intervals (default: 15 seconds).
- Each request's success or failure is logged and made available to the Flask application.

### Dashboard (`app/templates/index.html`)
- The dashboard is designed using HTML and styled with CSS.
- It dynamically updates the chart with the latest availability data fetched from the Flask backend using JavaScript.

### JavaScript (`app/static/js/dashboard.js`)
- This script fetches the latest availability data from the Flask backend and updates the Chart.js chart accordingly.

## Output

Below is a screenshot of the Fetch Monitor Dashboard in action:

![Fetch Monitor Dashboard] ![Screenshot (135)](https://github.com/user-attachments/assets/03246e48-d4d3-410d-925d-9c045684a95b)




The bar chart displays the availability percentage for each monitored endpoint, providing a quick overview of their status.

## Configuration File (`endpoints.yaml`)
The `endpoints.yaml` file allows users to define multiple endpoints. Here's a brief explanation of its components:

- `url`: The URL of the endpoint to monitor.
- `method`: The HTTP method to use (GET, POST, etc.).
- `headers` (optional): A dictionary of HTTP headers.
- `body` (optional): The body content for requests requiring it (typically for POST requests).

### Example:
```yaml
- url: "https://api.example.com/data"
  method: "POST"
  headers:
    Content-Type: "application/json"
  body: '{"key": "value"}'
```

## Usage Instructions

1. Start Monitoring: Run the command `python app.py` to start the Flask server. The monitoring will begin automatically.
2. View the Dashboard: Open your web browser and go to `http://127.0.0.1:5000` to view the dashboard displaying the availability of the configured endpoints.
3. Modify Check Interval: If you want to change how often the endpoints are checked, locate the `time.sleep(15)` line in `monitor.py` and adjust the value to your preferred interval in seconds.

## Troubleshooting

- Dashboard Not Loading: Ensure that the Flask server is running on the correct port (default: 5000). Check for any network issues.
- Configuration Errors: Verify that the `endpoints.yaml` file has the correct syntax, especially regarding YAML indentation.
- Dependencies Issues: If you encounter issues with missing packages, run `pip install -r requirements.txt` again.
- Data Not Updating: Refresh the dashboard in your browser and check the terminal for any error messages from the Flask server.

## Extending the Project
- Additional Metrics: Consider enhancing monitoring by tracking metrics like response time and error rates.
- Alerting: You can add a notification system to alert you via email or SMS if an endpoint goes down.
- Historical Data: Implement a database (e.g., SQLite or MongoDB) to store and analyze historical monitoring data.

## Acknowledgements
This project utilizes several libraries:
- [Flask](https://flask.palletsprojects.com/)
- [Requests](https://docs.python-requests.org/)
- [PyYAML](https://pyyaml.org/)
- [Chart.js](https://www.chartjs.org/)


