import axios from "axios";
import Patient from "../patients/Patient";
import { useEffect, useRef, useState } from "react";

const PatientList = (props) => {
  const patientListRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  const fillInPatients = () => {
    return (
      <ul>
        {patientListRef.current.map((patient) => {
          return (
            <Patient
              key={patient._id}
              firstName={patient.firstName}
              lastName={patient.lastName}
              email={patient.email}
              phone={patient.phone}
            />
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    axios.get("/patient").then((res) => {
      patientListRef.current = res.data;
      setIsLoading(false);
    });
  });

  return (
    <ul>{isLoading ? <div>Loading...</div> : <div>{fillInPatients()}</div>}</ul>
  );
};

export default PatientList;
