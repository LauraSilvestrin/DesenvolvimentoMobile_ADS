import express, { request, response } from "express"

const app = express();
app.use(express.json());

const pessoas = [];
var countID = 0;

// pessoas.push({
//     nome: "laura",
//     telefone: "99 algumacoisa"
// });

app.get("/", (request, response) => {
    return response.send(pessoas);
});

app.post("/cadastro", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    const novapessoa = {
        id: countID++,
        nome,
        telefone
    };

    pessoas.push(novapessoa);

    return response.send(novapessoa);
});

app.get("/listar/:nome", (request, response) => {

    const { nome } = request.params;


    const pessoa = pessoas.filter((i) => i.nome === nome);
    // for (var i in pessoas) {
    //     if (pessoas.find(nome)) {
    //         return response.send("pessoa encontrada")
    //     }
    // }

    return response.send(pessoa);
});

app.put("/atualizar/:id", (request, response) => {
    const { id } = request.params;
    const { nome, telefone } = request.body;

    const pessoaIndex = pessoas.findIndex((i) => i.id == i);

    if (pessoaIndex <= -1) {
        return response.send({ msg: "Não foi encontrada uma pessoa com esse index" });
    }

    pessoas[pessoaIndex].nome = nome;
    pessoas[pessoaIndex].telefone = telefone;

    return response.send({ nome, telefone });


});

app.delete("/deletar/:id", (request, response) => {
    const { id } = request.params;

    const pessoaIndex = pessoas.findIndex((i) => i.id == id);


    if (pessoaIndex <= -1) {
        return response.send({ msg: "Não foi encontrada uma pessoa com esse index" });
    } else {
        pessoas.splice(pessoaIndex, 1);
    }

    return response.send({ pessoas });
});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});