const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        service: "Estoque Service",
        status: "online"
    });
});

app.get("/estoque/:produto", (req, res) => {
    res.json({
        produto: req.params.produto,
        quantidade: 100
    });
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Estoque Service rodando na porta ${PORT}`);
});