const { Airplane } = require('../models/index');
const CrudRespository = require('./crud-repository');

class AirplaneRepository extends CrudRespository {

    constructor() {
        super(Airplane);
    }

    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = AirplaneRepository;