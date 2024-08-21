const BaseRepository= require('../../domain/repositories/BaseRepositories');
const UserModel = require('../database/models/UserModel');

class SequelizeUserRepository extends BaseRepository {
  async findById(id) {
    return await UserModel.findByPk(id);
  }

  async save(user) {
    return await UserModel.create(user);
  }
}

module.exports = SequelizeUserRepository;
