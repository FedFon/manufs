/**
 * File: EditPatient.js
 * Author: Fedfon
 * Purpose: This file is the page rendered when Edit patient is selected. Holds the forms component and is rendered on the App component.
 */
import EditPatientForm from "../patients/EditPatientForm";

const EditPatient = (props) => {
  return (
    <section>
      <h1>Editing patient</h1>
      <EditPatientForm />
    </section>
  );
};

export default EditPatient;
