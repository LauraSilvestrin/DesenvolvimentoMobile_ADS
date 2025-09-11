import express, { response } from "express";
import { request } from "http";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "templates")));
app.use(express.urlencoded({ extended: true }));

const pessoas = [];

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "templates", "cadastro.html"));
});

app.post("/cadastrar", (request, response) => {

    const nome = request.body.nome;
    const usuario = request.body.usuario;
    const senha = request.body.senha;

    const novapessoa = {
        nome,
        usuario,
        senha
    };

    pessoas.push(novapessoa);
    console.log(pessoas)
    response.redirect("/login");
});

app.get("/login", (request, response) => {
    response.sendFile(path.join(__dirname, "templates", "login.html"));
});

app.post("/logar", (request, response) => {
    const usuario = request.body.usuario;
    const senha = request.body.senha;

    const pessoaIndex = pessoas.findIndex((i) => i.usuario == usuario);

    if (pessoaIndex <= -1) {
        return response.send({ msg: "Usuário não encontrado!" });
    }

    if (pessoas[pessoaIndex].senha === senha) {
        console.log("Login realizado com sucesso");
        response.redirect("/home"); 
    } else {
        console.log("Senha errada!");
        return response.send({ msg: "Senha incorreta" });
    }

});

app.get("/home", (request, response) => {
    response.sendFile(path.join(__dirname, "templates", "home.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
