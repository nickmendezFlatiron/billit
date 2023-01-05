import NavigationBar from './components/NavigationBar';
import CsvForm from './components/CsvForm';
import ProjectTable from './components/ProjectTable';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <CsvForm />
        <ProjectTable />
      </Container>
    </div>
  );
}

export default App;
