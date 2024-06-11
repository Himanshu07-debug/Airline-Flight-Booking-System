const {BookingService} = require("../services/index")

const bookingService = new BookingService();

const create = async(req, res) => {

    try{
        const response = await bookingService.createBooking(req.body);
        return res.status(201).json({
            message : "Successfully completed Booking",
            success: true,
            data : response
        })
    }
    catch(err){

        res.status(404).json({
            message : err.message,
            success : false,
            data : {}
        })

    }

}

module.exports = {
    create
}