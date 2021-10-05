import express from "express";
import {
  getPatients,
  addNewPatient,
  getPatientWithId,
  updatePatient,
  deletePatient,
  getPatientsAscend,
  getPatientsDescend,
} from "../src/controllers/PatientController";

const router = express.Router();

router
  .route("/patient")
  .get((req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
  }, getPatients)
  .post(addNewPatient);

router.route("/").get((req, res, next) => {
  res.send("Hello World");
  console.log(`Request from: ${req.originalUrl}`);
  console.log(`Request type: ${req.method}`);
  next();
});

router.route("/patient/asc").get((req, res, next) => {
  console.log(`Request from: ${req.originalUrl}`);
  console.log(`Request type: ${req.method}`);
  next();
}, getPatientsAscend);

router.route("/patient/desc").get((req, res, next) => {
  console.log(`Request from: ${req.originalUrl}`);
  console.log(`Request type: ${req.method}`);
  next();
}, getPatientsDescend);

router
  .route("/patient/:patientID")
  .get((req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
  }, getPatientWithId)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;
