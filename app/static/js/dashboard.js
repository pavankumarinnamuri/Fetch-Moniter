const ctx = document.getElementById('availabilityChart').getContext('2d');

function fetchMonitoringData() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            const labels = Object.keys(data);
            const upCounts = labels.map(label => data[label].up);
            const totalCounts = labels.map(label => data[label].total);
            const availability = upCounts.map((up, index) => (up / totalCounts[index]) * 100);

            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Availability (%)',
                        data: availability,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Availability (%)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Domains'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Fetch data and render chart every 15 seconds
setInterval(fetchMonitoringData, 15000);
fetchMonitoringData();

