

export const createOptions = (start, end, units) => {
  const array = new Array(end-start)
  for (let i = start; i <= end; i++) {
    array.push(`${i} ${units}`)
  }
  return array
}



export const createMeterOptions = (start, end, units) => {
  const array = new Array(end-start)
  array.push(`0 ${units}`)
  for (let i = start; i <= end; i++) {
    i += 99
    array.push(`${i} ${units}`)
  }
  return array
}

export const createWeightOptions = (start, end, units) => {
  const array = new Array(end-start)
  for (let i = start; i <= end; i++) {
    array.push(`${i} ${units}`)
    i -= 0.5

  }
  return array
}



export const weekdays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]