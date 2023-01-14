import SessionUser from "../schemas/SessionUser";

class SessionUserController {

    async post(req, res) {
        const { _id, nome, email } = req.body
        const list = await SessionUser.create({
            _id,
            nome,
            email
        })
        return res.json(list)
    }

    async get(req, res) {
        const { email } = req.query
        const list = await SessionUser.findOne({ email: email })
        return res.json(list)

    }
}
export default new SessionUserController();