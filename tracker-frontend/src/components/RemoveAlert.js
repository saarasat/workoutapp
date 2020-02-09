import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

const RemoveAlert = ({confirm, removalText}) => {
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
        <Alert variant="dark" className="gray" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Are you sure you want to remove?</Alert.Heading>
          <div className="d-flex justify-content-end">
            <Button onClick={doTheAction} variant="dark" className="btn-save">
              Yes, remove
            </Button>
            <Button onClick={cancelAction} variant="dark" className="btn-cancel">
              Cancel
            </Button>
          </div>
        </Alert>
      </div>
    )
  }
  return <Button onClick={() => setShow(true)}>{removalText}</Button>
}



 
export default RemoveAlert