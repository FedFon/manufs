import express from "express";
import {
  getPatients,
  addNewPatient,
  getPatientWithId,
  updatePatient,
  deletePatient,
} from "../src/controllers/PatientController";

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
  }, getPatients)
  .post(addNewPatient);

router
  .route("/:patientID")
  .get((req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
  }, getPatientWithId)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;
