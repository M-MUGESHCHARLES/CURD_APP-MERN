const express = require('express');
const EmployeeSchema = require('../model/EmployeeSchema');
const router = express.Router();


router.post("/AddEmployees", (req, res) => {
  console.log("Received data:", req.body); // Log the received data

  EmployeeSchema.create(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error in posting data: ", err);
      res.status(500).json({ message: "Failed to add employee" });
    });
});



router.get('/Details', (req , res) => {
    EmployeeSchema.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(data);
        }
    })
} );

module.exports = router;