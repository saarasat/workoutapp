
const timeReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_NEW_TIME':
    return [...state, action.data]
  default: 
    return state
  }
}

const generateId = () => Number((Math.random()*100000)).toFixed(0)

export const createNewTime = (time) => {
  return {
    type: 'ADD_NEW_TIME',
    data: {
      time,
      id: generateId()
    }
  }
}


export default timeReducer