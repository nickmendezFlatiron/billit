import React from 'react'
import Table from 'react-bootstrap/Table';

const ProjectTable = () => {
  return (
    <div>
      <Table>
        <thead hover>
          <tr className='table-header'>
            <th className='ps-2'>Name</th>
            <th>Clients</th>
            <th className='text-end'>Hours</th>
            <th className='text-end'>Billable Hours</th>
            <th className='text-end pe-2'>Billable Amount</th>
          </tr>
        </thead>
      </Table>
    </div>
  )
}

export default ProjectTable