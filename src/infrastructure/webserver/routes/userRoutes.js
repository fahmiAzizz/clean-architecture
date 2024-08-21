const express = require('express');
const UserController = require('../controllers/UserController');
const SequelizeUserRepository = require('../../repositories/SequelizeUserRepository');
const UserUseCase = require('../../../use-cases/UserUseCase');

const router = express.Router();

const userRepository = new SequelizeUserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

router.get('/:id', (req, res) => userController.getUserById(req, res));
router.post('/', (req, res) => userController.createUser(req, res));

module.exports = router;
