/**
 * File: NewPatient.js
 * Author: Fedfon
 * Purpose: This file is the page rendered when create patient is selected. Holds the forms component and is rendered on the App component.
 */
import NewPatientForm from "../patients/NewPatientForm"

const NewPatient = () => {

    return(
       <section>
           <h1>Adding a new patient</h1>
           <NewPatientForm/>
       </section>
    );
};

export default NewPatient;