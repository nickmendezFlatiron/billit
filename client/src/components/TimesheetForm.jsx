import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

const TimesheetForm = () => {
  const [openForm, setOpenForm] = useState(false);
  const openClose = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="fw-bold" viewBox="0 0 16 16">
                      <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"/>
                    </svg>
  return (
    
      <div className="py-3">    
        <div className="d-flex ">
          <h2 className="text-center">New Timesheet Entry</h2>
          <Button className="rounded-pill ms-4" size="sm" onClick={() => setOpenForm(!openForm)}>
            {openClose}
          </Button>
        </div>
        <Collapse in={openForm}>
        <Form className="bg-white">
          <Row className= "pt-2">
            <Col>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                className="underline-text-input mb-2"
              />
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Is this billable?</Form.Label>
                <Form.Select>
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Hours</Form.Label>
                <Form.Control type="number" step={0.01} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Billable Rate</Form.Label>
                <Form.Control type="number" step={0.01} />
              </Form.Group>
            </Col>
          
            <Form.Control
              type="text"
              placeholder="Client..."
              className="underline-text-input mb-2"
            />
            <Form.Control
              type="text"
              placeholder="Project name..."
              className="underline-text-input mb-2"
            />
            <Form.Control
              type="text"
              placeholder="Project code..."
              className="underline-text-input mb-2"
            />
            <Form.Control
              type="text"
              placeholder="First name..."
              className="underline-text-input mb-2"
            />
            <Form.Control
              type="text"
              placeholder="Last name..."
              className="underline-text-input mb-2"
            />

           
          </Row>
          </Form>
        </Collapse>
      </div>
  );
};

export default TimesheetForm;
