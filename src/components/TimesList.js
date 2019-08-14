import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const TimesList = ({ store }) => {

  return (

    <div className="container">
      <ListGroup>
        {store.getState().map(time =>
          <ListGroupItem key={time.id}>
            {time.time} {time.date}
          </ListGroupItem>
        )}
      </ListGroup>
    </div>
  )
}

export default TimesList