const CrudService = require('./crud-service');
const { AirportRespository } = require('../repository/index');

class AirportService {
    // constructor() {
    //     const airportRespository = new AirportRespository();
    //     super(airportRespository);
    // }

    constructor() {
        this.airportRepository = new AirportRespository();
    }

    async createAirport(data){

        try {
            const result = await this.airportRepository.createAirport(data);
            return result;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }

    }
}

module.exports = AirportService;