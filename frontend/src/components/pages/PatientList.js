import axios from "axios";
import Patient from "../patients/Patient";
import { useEffect, useRef, useState } from "react";

const PatientList = (props) => {
  const patientListRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  /*const deletePatient = () => {
    console.log("Deleting Patient");
    console.log(patientListRef.current);
    // axios.put(`/patient/${pa}`, patient);
  };*/

  const fillInPatients = () => {
    return (
      <ul>
        {patientListRef.current.map((patient) => {
          return (
            <div key={patient.email}>
              <Patient
                key={patient._id}
                firstName={patient.firstName}
                lastName={patient.lastName}
                email={patient.email}
                phone={patient.phone}
              />
              <button
                key={"delete " + patient._id}
                onClick={() => {
                  axios.delete(`/patient/${patient._id}`, patient);
                  console.log(patient._id);
                }}
              >
                Delete
              </button>
            </div>
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
