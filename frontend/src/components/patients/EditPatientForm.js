import { useRef } from "react";
import axios from "axios";

const EditPatientForm = (props) => {
  //creating refrences
  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();

  //This will handle the submit button for this form
  const submitHandler = (event) => {
    event.preventDefault(); //prevents page from reloading

    //setting references to values entered in the form
    const enteredId = idRef.current.value;
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhoneNumber = phoneNumberRef.current.value;

    //grouping form information into and object to be able to pass onto axios PUT call
    const patient = {
      _id: enteredId,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phone: enteredPhoneNumber,
    };

    //PUT call
    axios.put(`/patient/${enteredId}`, patient);

    // this will clear out the form after it is submitted
    idRef.current.value = "";
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";
  };

  //form returned
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="_id">ID</label>
        <input type="text" required id="_id" ref={idRef} />
      </div>
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
        <button>Edit Patient</button>
      </div>
    </form>
  );
};

export default EditPatientForm;
