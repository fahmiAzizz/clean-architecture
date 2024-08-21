class DataController {
    constructor(dataUseCase) {
    this.dataUseCase = dataUseCase;
    }

    async getDataById(req, res) {
    const { dataId } = req.params;
    try {
        const data = await this.dataUseCase.getDataById(dataId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
        }    
    }


    async getListData(req, res) {
        try {
            const data = await this.dataUseCase.getListData();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    createData = async (req,res) => {
        const { dataName } = req.body;
        try {
            const data = await this.dataUseCase.createDatas(dataName);
            res.status(201).json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async updateData(req, res) {
        try {
            const { dataId } = req.params; // Mengambil ID dari parameter URL
            const entity = req.body; // Mengambil data baru dari body request

            const result = await this.dataUseCase.updateData(dataId, entity);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = DataController;
