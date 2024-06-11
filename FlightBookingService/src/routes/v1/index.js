const express = require('express');

// const { InfoController } = require('../../controllers');

const {BookingController} = require("../../controllers/index")

const router = express.Router();

router.get('/info', (req, res) => {
    return res.json({message : "Response from Booking Service Home route"});
})

router.post('/flights',BookingController.create)

module.exports = router;