import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
require("highcharts/modules/solid-gauge")(Highcharts)
require("highcharts/highcharts-more")(Highcharts)

const options = {
  chart: {
    type: "solidgauge"
  },
  series: [
    {
      data: [80]
    }
  ]
}


const Gauge = () => {

  return (
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
    ref="chartComponent1"
  />
  )
}

export default Gauge