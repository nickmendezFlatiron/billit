import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

const TimesheetForm = () => {
  const formInit = {
    billing_date: "",
    is_billable: "--",
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

  const openClose = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      className="fw-bold"
      viewBox="0 0 16 16"
    >
      <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z" />
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
    console.log("submitted", formInfo);
  }

  function handleResetForm(e) {
    setFormInfo(formInit);
  }
  return (
    <div className="py-3 mt-2">
      <div className="d-flex pb-3">
        <h2 className="text-center">Add Entry</h2>
        <Button
          className="rounded-pill ms-4"
          size="sm"
          onClick={() => setOpenForm(!openForm)}
        >
          {openClose}
        </Button>
      </div>
      <Collapse in={openForm}>
        <Form className="bg-white" onSubmit={handleSubmitForm}>
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
                  <option value={null}>--</option>
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
        </Form>
      </Collapse>
      <hr className="" />
    </div>
  );
};

export default TimesheetForm;
