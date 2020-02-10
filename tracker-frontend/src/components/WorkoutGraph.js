import React from 'react'
import {connect} from 'react-redux'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import Notification from './Notification'
import { setNotification } from '../reducers/notificationReducer'

const WorkoutGraph = ({data, setNotification}) => {

  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Weekly workout time',
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
        text: 'week',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: false
      },
      minorTickInterval: 1,
      gridLineWidth: '1.1px',
      minorGridLineColor: '#ceccc1',
      minorGridLineWidth: '0.3px',
      gridLineColor: '#ceccc1',
    },
    series: [{
      type: 'column',
      data: data ? data : 0, 
      showInLegend: false,
      color: '#26B9D1'

    }],
  }
  return (
    <div className="graph-container">
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

export default connect(null, {setNotification})(WorkoutGraph)