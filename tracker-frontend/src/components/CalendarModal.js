import React, {useState} from 'react'
import Calendar from 'react-calendar'
import { Button, Modal, ModalBody } from 'react-bootstrap'

const CalendarModal = ({visible, hide, changeDay, setDate}) => {
  const [date, setThisDate] = useState(new Date())
  
  const setDateForForm = () => {
    setDate(date)
    hide()
  }

  return (    
    <Modal show={visible} onHide={hide}> 
      <ModalBody>
        <div>
          <Calendar locale="EN" onClickDay={(returnValue, event) =>  setThisDate(returnValue)} />
        </div>
      </ModalBody>              
      <Modal.Footer className="justify-content-center">
        <Button onClick={hide} className="btn-cancel" variant="dark">Cancel</Button>
        <Button onClick={setDateForForm} className="btn-save" variant="dark"> Ok</Button>      
      </Modal.Footer>
    </Modal>
  )
}


export default CalendarModal