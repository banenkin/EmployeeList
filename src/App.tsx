import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList'
import SelectEmployee from './components/SelectEmployee'
import Store from './data/Store'
import { Button } from 'react-bootstrap';

function App() {
  const appStore = new Store();
  return (
    <div className="App">
      <header className="App-header">
            <EmployeeList store={appStore}></EmployeeList>
            <SelectEmployee store={appStore}></SelectEmployee>
            <Button onClick={appStore.removeSelectedEmployee.bind(appStore)}>Remove selected</Button>
            <input type='text' onChange={appStore.handleEmployeeChange.bind(appStore)}/>
            <Button onClick={() => appStore.addEmployee()}>Add</Button>

            <Button onClick={() => appStore.loadEmployeeList()}>Load list</Button>
      </header>
    </div>
  );
}

export default App;
