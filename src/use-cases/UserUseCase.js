const User = require('../domain/entities/User'); 

class UserUseCase {
    constructor(baseRepository) {
    this.baseRepository = baseRepository;
}

    async getUserById(id) {
        return await this.baseRepository.findById(id);
    }
    
    async createUser(name, email) {

    const user = new User(null, name, email); 
    return await this.baseRepository.save(user);
    }
    

}

module.exports = UserUseCase;
