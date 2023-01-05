import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'

const CsvForm = () => {
  const [CsvFile, setCsvFile] = useState()

  return (
      <Container className='pt-5'>
        <input 
        type="file" 
        accept='.csv'
        />
      </Container>
  )
}

export default CsvForm