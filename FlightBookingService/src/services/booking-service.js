const axios = require('axios');

const {BookingRepository} = require("../repository/index")
const {FLIGHT_SERVICE} = require("../config/serverConfig")

class BookingService {

    constructor(){
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data){

        try{
            const flightId = data.flightId;
            let getFlightRequestURL = `${FLIGHT_SERVICE}/api/v1/flights/${flightId}`;

            // console.log(getFlightRequestURL);       

            const flight = await axios.get(getFlightRequestURL);
            console.log(flight.data.data);

            const flightData = flight.data.data;

            if(data.noOfSeats > flightData.totalSeats) {
                console.log("Error hai")
            }

            const totalBillingAmount = data.noOfSeats * flightData.price;

            const bookingPayload = {...data, totalCost: totalBillingAmount};
            
            const booking = await this.bookingRepository.createBooking(bookingPayload);

            const change = flightData.totalSeats - data.noOfSeats
            console.log(change)
    
            await axios.patch(`${FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`, {
                totalSeats: change
            });    
            
            return booking;
        }
        catch(err){
            console.log("Error occur in service layer")
            throw new err;
        }

    }

}

module.exports = BookingService;