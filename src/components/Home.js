import React from 'react'
import { Card } from 'react-bootstrap'
import Bike from '../images/Bike-header-image.jpg'


const Home = () => {
  return (
    <div className="container">
      <Card as={Card.Link} href="/training" bg="dark" text="white" style={{ width: '19rem' }}>
        <Card.Header  className="save">Biking</Card.Header>
        <Card.Img variant="bottom" src={Bike}></Card.Img>
      </Card>
      <br></br>
      <Card as={Card.Link} href="/training" bg="dark" text="white" style={{ width: '19rem' }}>
        <Card.Header variant="link" className="save">Walking</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>

        </Card.Body>
      </Card>
      <br></br>
      <Card as={Card.Link} href="/training" bg="dark" text="white" style={{ width: '19rem' }}>
        <Card.Header className="save">Fitness</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home