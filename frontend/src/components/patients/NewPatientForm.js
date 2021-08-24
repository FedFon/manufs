const NewPatientForm = () => {
  return (
    <form>
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
