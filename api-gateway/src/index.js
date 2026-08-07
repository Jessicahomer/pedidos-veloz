const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        service: "API Gateway",
        status: "online"
    });
});

app.use(
    "/pedidos",
    createProxyMiddleware({
        target: "http://pedido-service:3001",
        changeOrigin: true
    })
);

app.use(
    "/estoque",
    createProxyMiddleware({
        target: "http://estoque-service:3002",
        changeOrigin: true
    })
);

app.use(
    "/pagamento",
    createProxyMiddleware({
        target: "http://pagamento-service:3003",
        changeOrigin: true
    })
);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API Gateway rodando na porta ${PORT}`);
});