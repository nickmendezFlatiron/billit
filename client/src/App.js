import NavigationBar from './components/NavigationBar';
import CsvForm from './components/CsvForm';


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <CsvForm />
    </div>
  );
}

export default App;
