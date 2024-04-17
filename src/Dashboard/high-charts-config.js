export default function(historical) {
    return {
        title: {
            text: '',
            align: 'right'
        },
    
        yAxis: {
            title: {
                text: 'Price'
            }
        },
        
    
        xAxis: {
            type: 'datetime',
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            }
        },
    
        series: historical ? historical : [],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    }
}