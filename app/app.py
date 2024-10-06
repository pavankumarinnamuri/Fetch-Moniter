from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Route for the dashboard
@app.route('/')
def dashboard():
    return render_template('dashboard.html')

# Route for fetching monitoring data
@app.route('/api/data')
def get_data():
    try:
        with open('data/monitoring_results.json') as f:
            data = json.load(f)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)

