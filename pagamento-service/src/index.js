const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        service: "Pagamento Service",
        status: "online"
    });
});

app.post("/pagamento", (req, res) => {
    res.json({
        mensagem: "Pagamento processado com sucesso",
        status: "aprovado"
    });
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Pagamento Service rodando na porta ${PORT}`);
});