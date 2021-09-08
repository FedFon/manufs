import Card from "../ui/Card";
const Patient = (props) => {
  return (
    <li>
      <Card>
        <div className="dl-horizontal">
          <dl>
            <dt>First name</dt>
            <dd>{props.firstName}</dd>
            <dt>Last name</dt>
            <dd>{props.lastName}</dd>
            <dt>Email name</dt>
            <dd>{props.email}</dd>
            <dt>Phone Number</dt>
            <dd>{props.phone}</dd>
          </dl>
        </div>
      </Card>
    </li>
  );
};

export default Patient;
