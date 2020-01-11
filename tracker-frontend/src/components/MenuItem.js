import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MenuItem = ({ type, icon, sports }) => {


  return (
    <>
      <Card bg="dark" >
        <Card.Header >
          <Link to={`/training/${type}`}>{type}</Link>
        </Card.Header>
      </Card>
    </>
  )
}


export default MenuItem