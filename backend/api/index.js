import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("get request received");
  res.send("hmmmm");
});

module.exports = router;
