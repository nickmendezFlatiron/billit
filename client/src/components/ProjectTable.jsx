import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import TableRow from './TableRow';

const ProjectTable = () => {

  return (
      <Container fluid className=''>
      <Row>
        <Col>
          <h5>Hours Tracked</h5>
          <h3>xxx.00</h3>
        </Col>
        <Col className="text-end">
          <h5>Billable Amount</h5>
          <h3>$xx,xxx.00</h3>
        </Col>
      </Row>
  
      <Table hover>
        <thead >
          <tr className='table-header'>
            <th className='ps-2'>Name</th>
            <th>Clients</th>
            <th className='text-end'>Hours</th>
            <th className='text-end'>Billable Hours</th>
            <th className='text-end pe-2'>Billable Amount</th>
          </tr>
        </thead>
        <tbody>
          <TableRow></TableRow>
        </tbody>
      </Table>
      </Container>
  )
}

export default ProjectTable