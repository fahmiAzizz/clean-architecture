const BaseRepository = require('../../domain/repositories/BaseRepositories')
const DataModel = require('../database/models/DataModel');

class SequelizeDataRepository extends BaseRepository {
  async findById(id) {
    return await DataModel.findByPk(id);
  }

  async findAll() {
    return await DataModel.findAll();
  }

  async save(data) {
    return await DataModel.create(data);
  }

  async update(dataId, entity) {
    return await DataModel.update(entity, { where: { dataId } });
}

}

module.exports = SequelizeDataRepository;
