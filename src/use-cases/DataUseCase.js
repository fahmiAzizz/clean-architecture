const Data = require('../domain/entities/Data'); 

class DataUseCase {
    constructor(baseRepository) {
    this.baseRepository = baseRepository;
}

    async getDataById(id) {
        return await this.baseRepository.findById(id);
    }

    async getListData(id) {
        return await this.baseRepository.findAll(id);
    }

    createData = async(dataName) => {
        const data = new Data(null, dataName);
        return await this.baseRepository.save(data);
    }

    async createDatas(dataName) {
        const data = new Data(null, dataName); 
        return await this.baseRepository.save(data);
    }

    async updateData(dataId, entity) {
        try {
            const result = await this.baseRepository.update(dataId, entity);
            if (result[0] === 0) {
                throw new Error('Data not found or not updated');
            }
            return { message: 'Data updated successfully' };
        } catch (error) {
            throw new Error(`Error updating data: ${error.message}`);
        }
    }

}

module.exports = DataUseCase;
