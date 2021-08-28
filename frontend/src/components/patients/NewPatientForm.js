import { useRef } from "react";
import axios from "axios";

const NewPatientForm = (props) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhoneNumber = phoneNumberRef.current.value;

    const patient = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phone: enteredPhoneNumber,
    };

    axios
      .post("/patient", {
        ...patient,
      })
      .then((res) => {
        let patientData = res.data;
        console.log(patientData);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(patient);
  };
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
