import express  from "express";

const app = express();


// (rota de acesso da função, (req, res))

app.get('/', (request, response) => {
    return response.json({ message: "Hello World!" });
})

app.post('/', (request, response) => {
    return response.json({ message: "server Running"});
})

app.listen(3333, () => console.log("Server running!"));