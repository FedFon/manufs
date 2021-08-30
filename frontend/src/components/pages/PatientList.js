import axios from "axios";
import Patient from "../patients/Patient";
import { useEffect, useRef, useState } from "react";

const PatientList = (props) => {
  //Making a reference with an empty array
  const patientListRef = useRef([]);
  //Setting state of loading for patient list
  const [isLoading, setIsLoading] = useState(true);

  //This function will return an unordered list with Patients
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
                  //if the delete button is clicked, the current patient object as well as its _id is passed onto the axios DELETE call
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

  //if the state changes the axios GET call willl output the patient list
  useEffect(() => {
    axios.get("/patient").then((res) => {
      patientListRef.current = res.data;
      setIsLoading(false);
    });
  });

  //either display loading... or the list when its ready
  return (
    <ul>{isLoading ? <div>Loading...</div> : <div>{fillInPatients()}</div>}</ul>
  );
};

export default PatientList;
