/**
 * File: App.js
 * Author: Fedfon
 * Purpose: This file is the main component that will be rendered in index.js
 */
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewPatient from "./components/pages/NewPatient";
import PatientList from "./components/pages/PatientList";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/patient">
          <NewPatient />
        </Route>
        <Route path="/list">
          <PatientList />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
