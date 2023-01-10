import { model, Schema } from 'mongoose'

const Cortes = new Schema({
    idSalao: String,
    corte: String,
    valor: String
})

export default new model('Cortes', Cortes)
