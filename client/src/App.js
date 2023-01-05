import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import CsvForm from './components/CsvForm';

import logo from './assets/billit-logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='py-0'>
            <img
              alt=""
              src={logo}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <CsvForm />
    </div>
  );
}

export default App;
