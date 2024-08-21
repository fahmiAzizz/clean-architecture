class BaseRepository {
   
    async findById(id) {
        throw new Error("Method not implemented.");
    }

    async findAll() {
        throw new Error("Method not implemented.");  
    }
    
    async findUsers() {
        throw new Error("Method not implemented")
    }
    
    async update(id, entity) {
        throw new Error("Method not implemented")
    }

    async save(user) {
    throw new Error("Method not implemented.");
    }
}

module.exports = BaseRepository;