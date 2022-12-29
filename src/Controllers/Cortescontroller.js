import Cortes from '../schemas/Cortes'

class Cortescontroller {
    async post(req, res) {
        const { idsalao, corte, valor } = req.body
        const list = await Cortes.create({
            idsalao,
            corte,
            valor
        })
        res.json(list)
    }
    async update(req, res) {
        const { _id } = req.params
        const { idsalao, corte, valor } = req.body
        const list = await Cortes.updateOne({ _id: _id }, {
            idsalao,
            corte,
            valor
        })
        res.json(list)
    }
    async del(req, res) {
        const { _id } = req.params
        const list = await Cortes.deleteOne({ _id: _id })
        res.json(list)
    }
    async get(req, res) {
        const list = await Cortes.find()
        res.json(list)
    }
    async get3(req, res) {
        const { idsalao, data } = req.query
        const list = await Cortes.find({ idsalao: idsalao, data: data })
        res.json(list)
    }
    async get2(req, res) {
        const { idsalao } = req.query

        const list = await Cortes.findOne({ idsalao: idsalao })
        res.json(list)
    }
}
export default new Cortescontroller();