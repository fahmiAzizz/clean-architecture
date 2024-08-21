const express = require('express');
const DataController = require('../controllers/DataController');
const SequelizeDataRepository = require('../../repositories/SequelizeDataRepository');
const DataUseCase = require('../../../use-cases/DataUseCase');

const router = express.Router();

const dataRepository = new SequelizeDataRepository();
const dataUseCase = new DataUseCase(dataRepository);
const dataController = new DataController(dataUseCase);

router.get('/:dataId', (req, res) => dataController.getDataById(req, res));
router.get('/', (req, res) => dataController.getListData(req, res));
router.post('/', (req, res) => dataController.createData(req, res));
router.patch('/:dataId', (req, res) => dataController.updateData(req, res));

module.exports = router;