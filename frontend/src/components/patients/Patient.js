import Card from "../ui/Card";
const Patient = (props) => {
  return (
    <li>
      <Card>
        <div>
          <h2>{props.firstName}</h2>
          <h2>{props.lastName}</h2>
          <h3>{props.email}</h3>
          <h3>{props.phone}</h3>
        </div>
      </Card>
    </li>
  );
};

export default Patient;
