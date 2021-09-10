/**
 * File: PatientList.js
 * Author: Fedfon
 * Purpose: This file is the component that makes an API call to the express server in order to get the patient list from the MongoDB cluster.
 *          After that it will map the respone into Patient componentsto be displayed to the user
 */
import axios from "axios";
import Patient from "../patients/Patient";
import { useEffect, useRef, useState } from "react";

const PatientList = (props) => {
  //Making a reference with an empty array
  const patientListRef = useRef([]);
  //Setting state of loading for patient list
  const [isLoading, setIsLoading] = useState(true);
  const [deletePressed, setDeletePressed] = useState(false);

  //if the state changes the axios GET call will output the patient list
  useEffect(() => {
    console.log("running");
    axios.get("/patient").then((res) => {
      patientListRef.current = res.data;
      setIsLoading(false);
    });
  }, []);

  //if the delete button is pressed the state of deletePressed will change and this will execute
  useEffect(() => {
    if (deletePressed) {
      console.log("running after press");
      axios.get("/patient").then((res) => {
        setIsLoading(true);
        patientListRef.current = res.data;
        setIsLoading(false);
      });
      setDeletePressed(false);
    }
  }, [deletePressed]);

  //either display loading... or the list when its ready
  return (
    <ul className="list-inline">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
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
                  className="btn btn-secondary mb-4"
                  key={"delete " + patient._id}
                  onClick={() => {
                    setDeletePressed(true);
                    //if the delete button is clicked, the current patient object as well as its _id is passed onto the axios DELETE call
                    axios.delete(`/patient/${patient._id}`, patient);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </ul>
  );
};
export default PatientList;
