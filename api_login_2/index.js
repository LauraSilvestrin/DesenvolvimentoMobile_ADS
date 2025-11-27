import express, { request, response } from "express";

const app = express();
const PORT = 8080;

const usuarios = [];

app.use(express.json());

app.post("/cadastro", (request, response) => {
    const { nome, usuario, senha } = request.body;

    usuarios.push({ nome, usuario, senha });

    return response.send({ msg: "Usuário cadastrado com sucesso!" });
});

app.post("/login", (request, response) => {
    const { usuario, senha } = request.body;

    const data = usuarios.find(i => i.usuario == usuario);

    if (data) {
        if (data.senha == senha) {
            return response.send({ msg: "Login realizado com sucesso" });
        } else {
            return response.send({ msg: "Usuario ou senha invalidos" })
        }
    }
});

app.get("/", (request, response) => {
    return response.send(pessoas);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
