import React, { useMemo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import TableRow from "./TableRow";
import uuid from "react-uuid";

const ProjectTable = ({ tableData }) => {
  const sortByName = useMemo(() => {
    return tableData.reduce((acc, b) => {
      acc[b.project] ? acc[b.project].push(b) : (acc[b.project] = [b]);
      return acc;
    }, {});
  }, [tableData]);

  const renderTableRows = Object.keys(sortByName)
    .sort((a, b) => {
      const nameA = a.toUpperCase();
      const nameB = b.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .map((name) => {
      return <TableRow key={uuid()} name={name} project={sortByName[name]} />;
    });

  return (
    <>
      <Row className="mb-3">
        <Col>
          <h5 className="text-secondary">Hours Tracked</h5>
          <h2>xxx.00</h2>
        </Col>
        <Col className="text-end">
          <h5 className="text-secondary">Billable Amount</h5>
          <h2>$xx,xxx.00</h2>
        </Col>
      </Row>
      <div className="overflow-auto">
        <Table hover className="mw-100">
          <thead>
            <tr className="table-header">
              <th className="ps-2">Name</th>
              <th>Clients</th>
              <th className="text-end">Hours</th>
              <th className="text-end">Billable Hours</th>
              <th className="text-end pe-2">Billable Amount</th>
            </tr>
          </thead>
          <tbody>{renderTableRows}</tbody>
        </Table>
      </div>
      {tableData.length === 0 && (
        <Spinner animation="border" className="text-blue" />
      )}
    </>
  );
};

export default ProjectTable;
