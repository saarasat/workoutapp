

export const createOptions = (start, end) => {
  const array = new Array(end-start)
  for (let i = start; i <= end; i++) {
    array.push(i)
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



