import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PatientList from './components/PatientList';
import AddPatient from './components/AddPatient';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/patients" component={PatientList} />
          <Route path="/add-patient" component={AddPatient} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
