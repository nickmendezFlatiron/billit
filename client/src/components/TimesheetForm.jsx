import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import uuid from 'react-uuid'
import formValidate from "../functions/formValidate"

const TimesheetForm = () => {
  const formInit = {
    billing_date: "",
    is_billable: true,
    hours: 0,
    billable_rate: 0,
    client: "",
    project: "",
    project_code: "",
    first_name: "",
    last_name: "",
  };
  const [formInfo, setFormInfo] = useState(formInit);
  const [openForm, setOpenForm] = useState(false);
  const [errors, setErrors] = useState(null)
  

  const openClose = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
      <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
    </svg>
  );

  function handleChangeForm(e) {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitForm(e) {
    e.preventDefault();  
    console.log(formValidate(formInfo))
    setErrors([...formValidate(formInfo)])
    
  }

  function handleResetForm(e) {
    setFormInfo(formInit);
    setErrors([])
  }

  const renderErrors = errors?.map(error => {
    
   return  <Col key={uuid()}>{error}</Col>
  })
  return (
    <div className="py-3 mt-2">
      <div className="d-flex pb-3">
        <h2 className="text-center">Add Entry</h2>
        <Button
          className={`opacity-75 rounded-pill border border-3  border-primary ms-4 ${openForm === false ? "rotate-180" : "rotate180" }`}
          size="sm"
          variant="outline-primary"
          onClick={() => setOpenForm(!openForm)}
        >
          {openClose}
        </Button>
      </div>
      <Collapse in={openForm}>
        <Form className="" onSubmit={handleSubmitForm}>
          <Row className="my-3">
            <Col>
              <Form.Label>Date *</Form.Label>
              <Form.Control
                type="date"
                className="underline-text-input"
                name="billing_date"
                value={formInfo.billing_date}
                onChange={handleChangeForm}
                required
              />
              
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Is this billable? *</Form.Label>
                <Form.Select
                  name="is_billable"
                  value={formInfo.is_billable}
                  onChange={handleChangeForm}
                  required
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Hours *</Form.Label>
                <Form.Control
                  value={formInfo.hours}
                  name="hours"
                  type="number"
                  step={0.01}
                  min="0"
                  onChange={handleChangeForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Billable Rate *</Form.Label>
              <InputGroup className="-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="number"
                  min="0"
                  step={0.01}
                  aria-label="Amount (to the nearest dollar)"
                  name="billable_rate"
                  value={formInfo.billable_rate}
                  onChange={handleChangeForm}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Client *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Client..."
                className="underline-text-input"
                name="client"
                value={formInfo.client}
                onChange={handleChangeForm}
              />
            </Col>
            <Col>
              <Form.Label>Project Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Project name..."
                className="underline-text-input "
                name="project"
                value={formInfo.project}
                onChange={handleChangeForm}
              />
            </Col>
            <Col>
              <Form.Label>Project Code *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Project code..."
                className="underline-text-input"
                name="project_code"
                value={formInfo.project_code}
                onChange={handleChangeForm}
              />
            </Col>
          </Row>
          <Row className="pb-3">
            <Col>
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name..."
                className="underline-text-input "
                name="first_name"
                value={formInfo.first_name}
                onChange={handleChangeForm}
              />
            </Col>
            <Col>
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name..."
                className="underline-text-input "
                name="last_name"
                value={formInfo.last_name}
                onChange={handleChangeForm}
              />
            </Col>
            <Col>
              <Form.Label></Form.Label>
              <div className="d-flex pt-2 justify-content-end">
                <Button className="me-4" type="submit">
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="outline-secondary"
                  onClick={handleResetForm}
                >
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            {renderErrors}
          </Row>
        </Form>
      </Collapse>
      <hr className="" />
    </div>
  );
};

export default TimesheetForm;
