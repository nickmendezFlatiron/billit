import { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import TimesheetForm from "./components/TimesheetForm";
import ProjectTable from "./components/ProjectTable";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("/timesheets")
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <TimesheetForm />
        <ProjectTable tableData={tableData} />
      </Container>
    </div>
  );
}

export default App;
