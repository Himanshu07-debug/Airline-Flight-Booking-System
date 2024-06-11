const CrudService = require('./crud-service');
const { AirplaneRepository } = require('../repository/index');

class AirplaneService extends CrudService {

    constructor() {
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository);
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

module.exports = AirplaneService;