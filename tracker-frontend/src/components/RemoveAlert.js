import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

const RemoveAlert = ({confirm, alertText, buttonText, buttonClass}) => {
  const [show, setShow] = useState(false)

  const cancelAction = () => {
    setShow(false)
  }

  const doTheAction = () => {
    confirm()
    setShow(false)
  }

  if (show) {
    return (
      <div className="container">
        <Alert variant="dark" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{alertText}</Alert.Heading>
          <div className="d-flex justify-content-end">
            <Button onClick={cancelAction} variant="dark" className="btn-cancel">
              Cancel
            </Button>
            <Button onClick={doTheAction} variant="dark" className="btn-pause">
              Yes, remove
            </Button>
          </div>
        </Alert>
      </div>
    )
  }
  return <Button className={buttonClass} onClick={() => setShow(true)}>{buttonText}</Button>
}



 
export default RemoveAlert