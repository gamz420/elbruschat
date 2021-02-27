import express from "express";
import ws from "ws";

const app = express();

app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index");
});

const httpServer = app.listen(process.env.PORT ?? 3000);

const wsServer = new ws.Server({
  server: httpServer,
});

wsServer.on("connection", (client) => {
  client.on("message", (message) => {
    const obj = JSON.parse(message);
    obj.date = new Date();
    const newMessage = JSON.stringify(obj);
    wsServer.clients.forEach((client) => {
      client.send(newMessage);
    });
  });
});
