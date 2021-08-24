import { useRef } from "react";

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

    const patientObject = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phone: enteredPhoneNumber,
    };

    props.onAddPatient(patientObject);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" />
      </div>
      <div>
        <button>Add Patient</button>
      </div>
    </form>
  );
};

export default NewPatientForm;
