import Card from "../ui/Card";
const Patient = (props) => {
  return (
    <li>
      <Card>
        <div className="card-body">
          <div className="card-text">
            <dl className="row">
              <dt className="col-sm-3 text-md-right">First name</dt>
              <dd className="col-sm-9">{props.firstName}</dd>
              <dt className="col-sm-3 text-md-right">Last name</dt>
              <dd className="col-sm-9">{props.lastName}</dd>
              <dt className="col-sm-3 text-md-right">Email name</dt>
              <dd className="col-sm-9">{props.email}</dd>
              <dt className="col-sm-3 text-md-right">Phone Number</dt>
              <dd className="col-sm-9">{props.phone}</dd>
            </dl>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default Patient;
