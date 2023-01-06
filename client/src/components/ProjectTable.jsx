import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";
import uuid from "react-uuid";

const ProjectTable = ({ tableData }) => {
  const sortByName = tableData?.reduce((acc, b, i) => {
    acc[b.project] ? acc[b.project].push(b) : (acc[b.project] = [b]);
    return acc;
  }, {});

  const renderTableRows =
    sortByName &&
    Object.keys(sortByName).map((name) => {
      return <TableRow key={uuid()} name={name} project={sortByName[name]} />;
    });
  const tempRow = <TableRow name="placeholder" />;
  const placeHolder = tableData === null ? tempRow : renderTableRows;
  return (
    <>
      <Row className="mb-3">
        <Col>
          <h5>Hours Tracked</h5>
          <h2>xxx.00</h2>
        </Col>
        <Col className="text-end ">
          <h5>Billable Amount</h5>
          <h2>$xx,xxx.00</h2>
        </Col>
      </Row>

      <Table hover>
        <thead>
          <tr className="table-header">
            <th className="ps-2">Name</th>
            <th>Clients</th>
            <th className="text-end">Hours</th>
            <th className="text-end">Billable Hours</th>
            <th className="text-end pe-2">Billable Amount</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows}
          </tbody>
      </Table>
    </>
  );
};

export default ProjectTable;
