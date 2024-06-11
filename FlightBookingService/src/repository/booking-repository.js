const { Booking } = require('../models');

class BookingRepository{

    async createBooking(data) {
        try{
            const response = await Booking.create(data);
            return response;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    } 

}

module.exports = BookingRepository



