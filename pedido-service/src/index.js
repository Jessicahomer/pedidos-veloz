const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

// Rota para verificar se o serviço está funcionando
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "pedido-service"
  });
});

// Lista de pedidos (em memória)
const pedidos = [];

// Listar pedidos
app.get("/pedidos", (req, res) => {
  res.json(pedidos);
});

// Criar pedido
app.post("/pedidos", (req, res) => {
  const pedido = req.body;
  pedidos.push(pedido);

  res.status(201).json({
    mensagem: "Pedido criado com sucesso!",
    pedido
  });
});

app.listen(PORT, () => {
  console.log(`Pedido Service rodando na porta ${PORT}`);
});