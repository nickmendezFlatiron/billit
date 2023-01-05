import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'

import Form from 'react-bootstrap/Form'
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const CsvForm = () => {
  const [openForm, setOpenForm] = useState(false)
  return (
      <Container className='py-2 my-4 border border-3 rounded w-50'>
        <div className='d-flex justify-content-between'>
          <h2 className='text-center'>New Timesheet Entry</h2>
          <Button size='sm' onClick={() => setOpenForm(!openForm)}>+</Button>
        </div>
        <Collapse in={openForm}>
          <Form className="bg-white">
            <Form.Control type="text" placeholder="Client..." className='underline-text-input mb-2'/>
            <Form.Control type="text" placeholder="Project name..." className='underline-text-input mb-2'/>
            <Form.Control type="text" placeholder="Project code..."className='underline-text-input mb-2'/>
            <Form.Control type="text" placeholder="First name..."className='underline-text-input mb-2'/>
            <Form.Control type="text" placeholder="Last name..."className='underline-text-input mb-2'/>
            <Form.Group>
              <Form.Label>Is Billable?</Form.Label>
              <Form.Select>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Hours</Form.Label>
              <Form.Control type="number" step={0.01}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Billable Rate</Form.Label>
              <Form.Control type="number" step={0.01}/>
            </Form.Group>
            {/* <input 
            type="file" 
            accept='.csv'
            /> */}
          </Form>
        </Collapse>
      </Container>
  )
}

export default CsvForm