/**
 * File: EditPatientForm.js
 * Author: Fedfon
 * Purpose: This file is the component for the form when editing a patient.
 */
import { useRef, useState } from "react";
import axios from "axios";
import PatientList from "../pages/PatientList";

const EditPatientForm = (props) => {
  //state to return to patient list
  const [backToPatients, setBackToPatients] = useState(false);

  //creating refrences
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();

  //This will handle the submit button for this form
  const submitHandler = (event) => {
    event.preventDefault(); //prevents page from reloading

    //setting references to values entered in the form
    let enteredFirstName = firstNameRef.current.value;
    let enteredLastName = lastNameRef.current.value;
    let enteredEmail = emailRef.current.value;
    let enteredPhoneNumber = phoneNumberRef.current.value;

    //if any of the field were left empty, use the old patient values to fill
    if (enteredFirstName === "") {
      enteredFirstName = props.patient.firstName;
    }

    if (enteredLastName === "") {
      enteredLastName = props.patient.lastName;
    }

    if (enteredEmail === "") {
      enteredEmail = props.patient.email;
    }

    if (enteredPhoneNumber === "") {
      enteredPhoneNumber = props.patient.phone;
    }

    //grouping form information into and object to be able to pass onto axios PUT call
    const patient = {
      _id: props.id,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phone: enteredPhoneNumber,
    };

    //PUT call
    axios.put(`/patient/${props.patient._id}`, patient);

    // this will clear out the form after it is submitted
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";

    //state change to return to patient list
    setBackToPatients(true);
  };

  //form returned
  return (
    <div>
      {backToPatients ? (
        <PatientList />
      ) : (
        <div>
          <form onSubmit={submitHandler}>
            <div>
              <label className="form-label fw-bold" htmlFor="firstName">
                First Name
              </label>
              <input
                className="form-control"
                type="text"
                id="firstName"
                ref={firstNameRef}
              />
            </div>
            <div>
              <label className="form-label fw-bold" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="form-control"
                type="text"
                id="lastName"
                ref={lastNameRef}
              />
            </div>
            <div>
              <label className="form-label fw-bold" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="form-control"
                type="text"
                id="phone"
                ref={phoneNumberRef}
              />
            </div>
            <div>
              <label className="form-label fw-bold" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="text"
                id="email"
                ref={emailRef}
              />
            </div>
            <div>
              <button className="btn btn-secondary" type="submit">
                Edit Patient
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditPatientForm;
