import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const TableRow = ({project, name}) => { 
  const totalHours = project?.reduce((a,b )=> {return a + b.hours}, 0)
  const billableHours = project?.reduce((a,b )=> {
    if(b.is_billable) {
      return a + b.hours
    }
    return a
  }, 0)
  const billableAmount = project?.reduce((a,b )=> {
    if(b.is_billable) {
      return a + (b.hours * b.billable_rate)
    }
    return a
  }, 0)
  const stats = {
    totalHours: totalHours && roundAmount(totalHours),
    billableHours: billableHours && roundAmount(billableHours),
    billableAmount: billableAmount && roundAmount(billableAmount)
    
  }

  function roundAmount(amount){
    return Math.round(amount * 100) / 100
  }
  function formatMoney(amount){
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  }
  if (name === "placeholder" ) return <Spinner animation="border" className="text-blue mt-3"/>
  return (
    <tr>
          <td className='ps-2 text-blue fw-light'>{name}</td>
          <td className="text-blue fw-light">{project[0].client}</td>
          <td className='text-end text-blue fw-light'>{stats?.totalHours}</td>
          <td className='text-end fw-light'>
            {stats?.billableHours} 
            <span className="text-muted ms-1">({Math.round(stats.billableHours / stats.totalHours * 100)}%)</span>
            </td>
          <td className='text-end pe-2 fw-light'>{billableHours === 0 ? "-" : formatMoney(roundAmount(billableAmount)) }</td>
    </tr>
  )
}

export default TableRow