import express, { request, response } from "express";

const app = express();

app.use(express.json());

let carros = [];

app.post("/cadastro", [validaCampos], (request, response) => {

    console.log("cadastro");

    const { modelo, cor, ano } = request.body;

    carros.push({ modelo, cor, ano });

    return response.send({ modelo, cor, ano });
});

app.get("/listar", (request, response) => {

});

function validaCampos(request, response, next) {

    console.log("validaCampos");

    const { modelo, cor, ano } = request.body;

    if (!modelo) {
        return response.send("O campo modelo é obrigatorio");
    }
    if (!cor) {
        return response.send("O campo cor é obrigatorio");
    }
    if (!ano) {
        return response.send("O campo ano é obrigatorio");
    }

    console.log("validaCampos next");
    
    return next();
}

app.listen(8080, () => {
    console.log("Servidor está rodando na porta 8080");
});