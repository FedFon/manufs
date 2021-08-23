import mongoose from "mongoose";
import { PatientSchema } from "../models/PatientSchema";

const Patient = mongoose.model("Patient", PatientSchema);

export const addNewPatient = (req, res) => {
  let newPatient = new Patient(req.body);

  newPatient.save((err, patient) => {
    if (err) {
      res.send(err);
    } else {
      res.json(patient);
    }
  });
};

export const getPatients = (req, res) => {
  Patient.find({}, (err, patient) => {
    if (err) {
      res.send(err);
    }
    res.json(patient);
  });
};

export const getPatientWithId = (req, res) => {
  Patient.findById(req.params.patientID, (err, patient) => {
    if (err) {
      res.send(err);
    }
    res.json(patient);
  });
};

export const updatePatient = (req, res) => {
  Patient.findByIdAndUpdate(
    { _id: req.params.patientID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, patient) => {
      if (err) {
        res.send(err);
      }
      res.json(patient);
    }
  );
};

export const deletePatient = (req, res) => {
  Patient.remove({ _id: req.params.patientID }, (err, patient) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "contact successfully deleted" });
  });
};
