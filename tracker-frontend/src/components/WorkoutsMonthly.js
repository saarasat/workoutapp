import React from 'react'
import { Link }  from 'react-router-dom'
import { Row,  Col } from 'react-bootstrap'
import Icon from './Icon'
import { getIcon } from './Sports'
import { faFireAlt, faMedal, faClock } from '@fortawesome/free-solid-svg-icons'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const MonthlyWorkouts = ({ workouts, totalCalories, totalTime, month }) => {
 

  const getWeek = (data) => {
    var date = new Date(data);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }

  const getMonths = () => {
    let monthsy = divideIntoWeeks().map(workout => workout.week);
    let unique = monthsy.filter((item, i, ar) => ar.indexOf(item) === i);
    return unique
  }

  const workoutTimes = (timeOnly) => {
    const time = timeOnly.split(':')
    const hours = ((Number(time[0]))*60) + ((Number(time[1])))
    return hours
  }

  const divideIntoWeeks = () => {
    const byWeeks = workouts.map(workout => ({time: workoutTimes(workout.time), week: getWeek(workout.date)}))
    return byWeeks
  }

  const addTimeByWeeks = (digit) => {
    const weeks =  getMonths()
    const workoutTimes = divideIntoWeeks()
    console.log(workoutTimes)
    
    const first = workoutTimes.filter(workout => workout.week === digit)
    console.log(first)
    const total = first.map(w => w.time)
    console.log(total)
    const totaa = total.reduce((tota, value) => tota + value)
    console.log(totaa)
    return totaa

  }

  const getData = () => {
    let array = Array(5)

  }

  

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
      data:[getData()], 
      showInLegend: false
    }],
  }

 

  return (
    <div>
          <HighchartsReact
            className="weight-graph"
            highcharts={Highcharts}
            constructorType={'chart'}
            options={options}
          />
          <HighchartsReact
            className="weight-graph"
            highcharts={Highcharts}
            constructorType={'chart'}
            options={options}
          />
        <div>
          <table className="results-total" > 
            <tbody>
              <tr>
                <td><Icon icon={faMedal} color="green"></Icon></td> 
                <td><Icon icon={faClock} color="blue"></Icon></td>
                <td><Icon icon={faFireAlt} color="red"></Icon></td>  
              </tr>
              <tr>
                <td className="results-total-column">{workouts.length}</td> 
                <td className="results-total-column">{totalTime}</td>
                <td className="results-total-column">{totalCalories}</td>  
              </tr>
              <tr>
                <td>Workouts</td> 
                <td>Time</td>
                <td>Calories</td>  
              </tr>
            </tbody>
          </table>
        </div>
            
        <div>
          {workouts.map(item =>
            <Link key={item.id} to={`/workouts/${item.id}`}>
              <Row className="result-list-row" key={item.id}>
                <Col xs={2} className="result-icon">{getIcon(item.type)}</Col>
                <Col xs={3} className="result-sport">{item.sport}</Col>
                <Col xs={3} className="result-time">{item.day} {item.date.getDate()}.{(item.date.getMonth()+1)}.{item.date.getFullYear()}</Col>
                <Col xs={1} className="result-time">{item.time}</Col>
                <Col xs={3} className="result-calories">{item.calories} kcal</Col>  
              </Row>
            </Link>
          )}
        </div> 
        <div>
          {getMonths().map(workout => <p>aika {workout} </p>)}
          
        </div>

    </div>
  )
}

export default MonthlyWorkouts