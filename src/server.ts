//precisa informar a definição de tipo.
//npm install @types/express -D     (tipagem pro express)
//npm install ts-node -D            (typescript pra ser usado no node)
//npm install typescript -D
//npx ts-node src/server.ts         (executa o server.ts)
//npx tsc --init                    (inicia o tsconfig)
//npm install ts-node-dev -D        (semelhante ao nodemon)
import express from "express";

const app = express();

app.use(express.json());

const users = ["Helder", "Santos", "de", "Castro"];

app.get("/users", (req, res) => {
  const search = String(req.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;
  res.send(filteredUsers);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users[id];
  return res.send({ user: user }).status(404);
});

app.post("/users", (req, res) => {
  const data = req.body;
  console.log(data);
  return res.json(data);
});

app.listen(3333, () => {
  console.log("Ecoleta on " + 3333);
});

// exemplo de QUERY
// app.get("/users", (req, res) => {
//   const search = String(req.query.search);

//   const filteredUsers = search
//     ? users.filter((user) => user.includes(search))
//     : users;
//   res.send(filteredUsers);
// });

// if ternario
