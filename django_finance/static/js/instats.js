const renderChart = (data, labels)=>{

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Last 6 Months Expenses',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title:{
                display: true,
                text: 'Expenses per Category'
            }
        }
    });

    
};



const getIncomeChartData = () => {
    fetch("{% url 'income-category-summary' %}")
    .then(res => res.json())
    .then(results => {
        const income_data = results.income_category_data;
        const [labels, data] = [Object.keys(income_data), Object.values(income_data)];
        renderChart(data, labels);
    });
};

// Call on load
window.onload = getIncomeChartData;
