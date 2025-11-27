import express, { request, response } from "express";
import knex from "knex";

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '1234',
        database: 'escola',
    },
});

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    const data = knex('aluno').select(knex.raw('count(*) as user_count, status'));
    console.log(data);
    response.send("hello world");
});

app.post("/aluno", [validaNome, validaRa], (request, response) => {
    console.log("[POST] /aluno");

    const { nome, ra } = request.body;

    response.send({ nome, ra });
});

function validaNome(request, response, next) {
    const { nome } = request.body;

    if (!nome) {
        response.send({ msg: "[validaNome] O campo nome é obrigatório" });
    }
    console.log("[validaNome] nome válido");
    next();
}

function validaRa(request, response, next) {
    const { ra } = request.body;

    if (!ra) {
        response.send({ msg: "[validaRa] O campo RA é obrigatório" });
    }

    console.log("[validaRa] RA válido");

    next();
}

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});