const { airport } = require('../models/index');

class AirportRespository {
    // constructor() {
    //     super(Airport);
    // }

    async createAirport(data){

        try{
            // console.log(data)
            const result = await airport.create(data)
            return result
        }
        catch(error){
            console.log("Something went wrong in Airport repo");
            throw error;
        }

    }

}

module.exports = AirportRespository;