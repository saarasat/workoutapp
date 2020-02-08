import React from 'react'



export const weightGraphOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Workouts',
      style: {
        color: '#FFFFFF',
      }
    },
    chart: {
      height: '80%',
      backgroundColor: '#212529',
    },
    credits: {
      text: ''
    },
    xAxis: {
      
      title: {
        text: false,
      },
    },
    yAxis: {
      min: 0,
      title: {
          text: false
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    series: [{
      type: 'column',
 //     data:[getData()], 
      showInLegend: false
    }],
  }


export const options = {

    title: {
      text: 'Weight',
      style: {
        color: '#FFFFFF',
      }
    },
    chart: {
      height: '80%',
      backgroundColor: '#212529'
    },
    credits: {
      text: ''
    },
    yAxis: {
      title: {
        text: false, 
      },
      labels: {
        style: {
        color: '#FFFFFF'
        }
      }
    },
    xAxis: {
      title: {
        text: false,
      },
      labels: {
        style: {
        color: '#FFFFFF'
        }
      },
      style: {
        color: '#FFFFFF'
      }
    },
    legend: false,
    series: [{
      data: [
 //       findWeights()
      ],
      lineColor: '#00bf8a',
      lineWidth: 4,
      color: '#00bf8a',
      showInLegend: false
    }],
  }