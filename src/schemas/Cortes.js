import { model, Schema } from 'mongoose'

const Cortes = new Schema({
    idSalao: String,
    corte: String,
    valor: Number
})

export default new model('Cortes', Cortes)