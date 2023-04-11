const express = require("express");
const todoRouter = require("./routes/toDo"); //추가 import

const app = express();

const port = 3010;

app.use(express.json());
app.use("/todo", todoRouter); //여기도 추가 todo

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 👂`);
});
