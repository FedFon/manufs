import { useRef } from "react";
import axios from "axios";

const NewPatientForm = (props) => {
  //creating refrences
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();

  //This will handle the submit button for this form
  const submitHandler = (event) => {
    event.preventDefault(); //prevents page from reloading

    //setting references to values entered in the form
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhoneNumber = phoneNumberRef.current.value;

    //grouping form information into and object to be able to pass onto axios POST call
    const patient = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phone: enteredPhoneNumber,
    };

    //POST call
    axios
      .post("/patient", {
        ...patient, //fill patient object into body
      })
      .then((res) => {
        let patientData = res.data; // respond by sending back object sent
        console.log(patientData);
      })
      .catch((err) => {
        //output error if failed
        console.log(err);
      });
  };

  //form returned
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" required id="firstName" ref={firstNameRef} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" required id="lastName" ref={lastNameRef} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" required id="phone" ref={phoneNumberRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" required id="email" ref={emailRef} />
      </div>
      <div>
        <button>Add Patient</button>
      </div>
    </form>
  );
};

export default NewPatientForm;
