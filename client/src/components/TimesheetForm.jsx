import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import uuid from "react-uuid";
import useFormValidate from "../functions/useFormValidate";
import fetchPostEntry from "../functions/fetchPostEntry";
import chevron from "../assets/double-chevron.svg";

const TimesheetForm = ({ tableData, setTableData }) => {
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
  const [messages, setMessages] = useState(null);
  const validate = useFormValidate;

  function handleChangeForm(e) {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "is_billable" && e.target.value === "false") {
      setFormInfo({
        ...formInfo,
        [e.target.name]: e.target.value,
        billable_rate: 0,
      });
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    const res = validate(formInfo, setMessages);
    if (res) {
      const fetch = fetchPostEntry(formInfo, setMessages);
      fetch.then((data) => {
        if (data) {
          setTableData([...tableData, data]);
          setFormInfo(formInit);
        }
      });
    }
  }

  function handleFormOpen() {
    setOpenForm(!openForm);
    setMessages([]);
  }

  function handleResetForm(e) {
    setFormInfo(formInit);
    setMessages([]);
  }

  const renderMessages = messages?.map((message) => (
    <li className="text-danger" key={uuid()}>
      {message}
    </li>
  ));
  return (
    <div className="py-3 mt-2">
      <div className="d-flex pb-3">
        <h2 className="text-center">Add Entry</h2>
        <Button
          className={`opacity-75 rounded-circle border border-3  border-primary ms-4 ${
            openForm === false ? "rotate-180" : "rotate180"
          }`}
          size="sm"
          variant="outline-primary"
          onClick={handleFormOpen}
        >
          <img
            className="text-primary"
            src={chevron}
            alt="open and close button"
          />
        </Button>
      </div>
      <Collapse in={openForm}>
        <Form className="" onSubmit={handleSubmitForm}>
          <Row xs={2} sm={4} className="my-3">
            <Col>
              <Form.Label>Date *</Form.Label>
              <Form.Control
                type="date"
                name="billing_date"
                value={formInfo.billing_date}
                onChange={handleChangeForm}
                required
              />
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Entry billable? *</Form.Label>
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
                <Form.Label className="mt-2 mt-sm-0">Hours *</Form.Label>
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
              <Form.Label className="mt-2 mt-sm-0">Billable Rate *</Form.Label>
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
                  disabled={formInfo.is_billable === "false"}
                  required
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
                name="client"
                value={formInfo.client}
                onChange={handleChangeForm}
                required
              />
            </Col>
            <Col>
              <Form.Label>Project Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Project name..."
                name="project"
                value={formInfo.project}
                onChange={handleChangeForm}
                required
              />
            </Col>
            <Col>
              <Form.Label>Project Code *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Project code..."
                name="project_code"
                value={formInfo.project_code}
                onChange={handleChangeForm}
                required
              />
            </Col>
          </Row>
          <Row className="pb-3">
            <Col>
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name..."
                name="first_name"
                value={formInfo.first_name}
                onChange={handleChangeForm}
                required
              />
            </Col>
            <Col>
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name..."
                name="last_name"
                value={formInfo.last_name}
                onChange={handleChangeForm}
                required
              />
            </Col>
            <Col>
              <Form.Label></Form.Label>
              <div className="d-flex pt-2 justify-content-end">
                <Button className="me-3 me-sm-4" type="submit">
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
          <Row>{renderMessages}</Row>
        </Form>
      </Collapse>
      <hr />
    </div>
  );
};

export default TimesheetForm;
