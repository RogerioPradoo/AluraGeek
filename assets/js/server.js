const jsonServer = require("json-server");
const servidor = jsonServer.criar();
const roteador = jsonServer.roteador("db/db.json");

const middlewares = jsonServer.padrões();

servidor.uso(middlewares);
server.use();
servidor.usar(roteador);
servidor.listen(3000, () => {
    console.log("O servidor JSON está em execução")
});
