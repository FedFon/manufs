import Card from "../ui/Card";
const Patient = (props) => {
  return (
    <li>
      <Card>
        <div>
          <div>First name: {props.firstName}</div>
          <div>Last name: {props.lastName}</div>
          <div>Email: {props.email}</div>
          <div>Phone number: {props.phone}</div>
        </div>
      </Card>
    </li>
  );
};

export default Patient;
