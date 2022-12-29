import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./router";

class App {
    constructor() {
        this.server = express();
        mongoose.set('strictQuery', true)
        mongoose.connect(
            "mongodb+srv://gspace:gspace@gspacer11.cbpzpqq.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        this.middlewares();
        this.route();
    }

    middlewares() {
        //cors serve para definir limitações de uso da api criada
        this.server.use(cors());

        this.server.use(express.json());

    }

    route() {
        this.server.use(route);
    }
}

export default new App().server;
