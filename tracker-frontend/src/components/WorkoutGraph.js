import React from 'react'
import {connect} from 'react-redux'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import Notification from './Notification'
import { setNotification } from '../reducers/notificationReducer'

const WeightGraph = ({data, setNotification}) => {

  const options = {
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
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%e %b'
      },
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
      data: data.length > 0 ? data : 0, 
      showInLegend: false
    }],
  }


  return (
    <div className="container">
      <HighchartsReact
        className="workout-graph"
        highcharts={Highcharts}
        constructorType={'chart'}
        options={options}
      />
      <Notification />
    </div>
  )
}

export default connect(null, {setNotification})(WeightGraph)