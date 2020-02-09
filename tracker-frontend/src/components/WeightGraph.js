import React from 'react'
import {connect} from 'react-redux'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import Notification from './Notification'
import { setNotification } from '../reducers/notificationReducer'


const WeightGraph = ({data, setSettingsDate, setNotification }) => {

  const options = {
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
      floor: 40,
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
      type: 'datetime',
      dateTimeLabelFormats: {
          day: '%e %b'
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
      data: data.length > 0 ? data : 0,
      lineColor: '#00bf8a',
      lineWidth: 3,
      cursor: 'pointer',
      marker: {
        enabled: true,
        lineWidth: 3,
        radius: 2,
        fillColor: '#00bf8a',
        lineColor: '#00bf8a'
      },    
      color: '#00bf8a',
      showInLegend: false,
      name: 'weight',
      point: {
        events: {
            click: function () {
                if (this.series.data.length > 1) {
                    setSettingsDate(this.x)
                    setNotification('You can modify the data for this day above')
                }
            }
        }
      }
    }]
  }  

  return (
    <div className="container">
    <HighchartsReact
      className="weight-graph"
      highcharts={Highcharts}
      constructorType={'chart'}
      options={options}
    />
    <Notification />
    </div>
  )
}

export default connect(null, {setNotification})(WeightGraph)