/**
 * File: PatientList.js
 * Author: Fedfon
 * Purpose: This file is the component that makes an API call to the express server in order to get the patient list from the MongoDB cluster.
 *          After that it will map the respone into Patient componentsto be displayed to the user
 */
import axios from "axios";
import Patient from "../patients/Patient";
import { useEffect, useRef, useState } from "react";
import EditPatientForm from "../patients/EditPatientForm";

const PatientList = (props) => {
  //Making a reference with an empty array
  const patientListRef = useRef([]);

  //Reference when editing a patient to pass patient to form component
  const editPatient = useRef([]);
  //Setting state of loading for patient list
  const [isLoading, setIsLoading] = useState(true);
  const [deletePressed, setDeletePressed] = useState(false);
  const [azPressed, setAzPressed] = useState(false);
  const [zaPressed, setZaPressed] = useState(false);
  const [editPressed, setEditPressed] = useState(false);

  //if the state changes the axios GET call will output the patient list
  useEffect(() => {
    axios.get("/patient").then((res) => {
      patientListRef.current = res.data;
      setIsLoading(false);
    });
  }, []);

  //if the delete button is pressed the state of deletePressed will change and this will execute
  useEffect(() => {
    if (deletePressed) {
      axios.get("/patient").then((res) => {
        setIsLoading(true);
        patientListRef.current = res.data;
        setIsLoading(false);
      });
      setDeletePressed(false);
    }
  }, [deletePressed]);

  useEffect(() => {
    if (azPressed) {
      axios.get("/patient/asc").then((res) => {
        setIsLoading(true);
        patientListRef.current = res.data;
        setIsLoading(false);
      });
      setAzPressed(false);
    }
  }, [azPressed]);

  useEffect(() => {
    if (zaPressed) {
      axios.get("/patient/desc").then((res) => {
        setIsLoading(true);
        patientListRef.current = res.data;
        setIsLoading(false);
      });
      setZaPressed(false);
    }
  }, [zaPressed]);

  //if edit state is active then return the form to edit patient, if not then return the patient list(loading if no connection).
  return (
    <div>
      {editPressed ? (
        <EditPatientForm patient={editPatient.current} />
      ) : (
        <div>
          <label>Sort By:</label>
          <button
            className="btn btn-secondary mb-2"
            onClick={() => {
              setAzPressed(true);
            }}
          >
            A-Z
          </button>
          <button
            className="btn btn-secondary mb-2"
            onClick={() => {
              setZaPressed(true);
            }}
          >
            Z-A
          </button>
          <ul className="list-inline">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div>
                {patientListRef.current.map((patient) => {
                  return (
                    <div key={patient._id}>
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
                          const prompt = window.confirm("Are you sure?");
                          if (prompt) {
                            setDeletePressed(true);
                            //if the delete button is clicked, the current patient object as well as its _id is passed onto the axios DELETE call
                            axios.delete(`/patient/${patient._id}`, patient);
                          }
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-secondary mb-4"
                        ref={editPatient}
                        onClick={() => {
                          editPatient.current = patient;
                          setEditPressed(true);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
export default PatientList;
