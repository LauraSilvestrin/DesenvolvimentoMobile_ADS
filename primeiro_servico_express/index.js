const express = require("express");

const app = express();

app.get("/alunos", (request, response) => {

    const filtro = request.query.filtro;

    console.log(filtro);

    const alunos = [
        { id: 1, nome: "Laura" },
        { id: 2, nome: "Fulano" },
        { id: 3, nome: "Beltrano" },
        { id: 4, nome: "Ciclano" },
        { id: 5, nome: "Luiz" },
        { id: 6, nome: "José" }
    ];

    response.send(alunos);
});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});
