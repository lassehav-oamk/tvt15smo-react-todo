import React, { Component } from 'react'
const ReactHighcharts = require('react-highcharts');

class TodoGraphs extends Component {
    render () {

        const { todos } = this.props;

        let processedItems = [];
        /*
        {
            name: "foo",
            y: 1
        }
        */

        todos.forEach(element => {
            let todoIndex = processedItems.findIndex(item => item.name === element.type);
            if(todoIndex === -1)
            {
                processedItems.push({
                    name: element.type,
                    y: 1
                });
            }
            else
            {
                processedItems[todoIndex].y++;
            }
        });

        const config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Task type share'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: processedItems
                /*[{
                    name: 'IE',
                    y: 56.33
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Firefox',
                    y: 10.38
                }, {
                    name: 'Safari',
                    y: 4.77
                }, {
                    name: 'Opera',
                    y: 0.91
                }, {
                    name: 'Other',
                    y: 0.2
                }]*/
            }]
        };

        return (
            <div>
                <ReactHighcharts config={ config }></ReactHighcharts>
            </div>
        )
    }
}

export default TodoGraphs