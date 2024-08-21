class UserController {
        constructor(userUseCase) {
        this.userUseCase = userUseCase;
        }
    
        async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await this.userUseCase.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
        async createUser(req, res) {
        const { name, email } = req.body;
        try {
            const user = await this.userUseCase.createUser(name, email);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
        }
    }
    
module.exports = UserController;
