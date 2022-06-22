/* eslint-disable no-mixed-spaces-and-tabs */
const CarService = require('../service/CarService');

class CarController {
	async creating(req, res) {
		try {
			const result = await CarService.create(req.body); 
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async listing(req, res) {
		try {
			const result = await CarService.listAll(req.query);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async listone(req, res) {
		try {
			const result = await CarService.getById(req.params.id);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async updating(req, res) {
		try {
			const result = await CarService.update(req.params.id, req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
	

	async updatingAcessoryCar(req, res) {
		
		const {id, idaccessories} = req.params;

		try {
			
			const result = await CarService.updateAcessory(id, idaccessories, req.body );    

			return res.status(200).json(result);

		} catch (error) {
			return res.status(400).json(error);
		}

	}
    
	async deleting(req, res) {
		try {
			const result = await CarService.delete(req.params.id);
			return res.status(204).json(result);
		} catch (error) {
			return res.status(400).json(error); 
		}
	}

}

module.exports = new CarController();

//deploy