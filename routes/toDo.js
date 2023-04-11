const express = require("express");

let todoData = require("../todoData.json"); //tododata연결

const router = express.Router();

router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  res.json(todoData[parseInt(id)]);
});

router.post("/", (req, res) => {
  console.log(req.body);

  todoData.push({ Ptitle, desc, isDone: false }); //todoData.push({ title: title, desc: desc });

  //res.jason("임시로 todo생성"); 하나만 존재
  console.log(todoData);
  res.json(todoData);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  if (!title && !desc) {
    //둘다 없을때 res실행
    res
      .status(400)
      .json({ error: "타이틀이나 설명 중에 하나의 값은 입력해야합니다." });
  }

  todoData[parseInt(id)] = {
    title: title ? title : todoData[parseInt(is)].title, //타이틀을 조회해서 타이틀이 있으면왼쪽 오른쪽 먼저순으롯 아용해//title: title,
    desc: desc ? desc : todoData[parseInt(id)].desc,

    isDone: todoData[parseInt(id)].isDone,
  };

  console.log(todoData);

  res.json(todoData);
});

router.put("/done/:id", (req, res) => {
  const { id } = req.params;

  todoData[parseInt(id)] = {
    title: todoData[parseInt(id)].title,
    desc: todoData[parseInt(id)].desc,
    isDone: !todoData[parseInt(id)].isDone,
  };
  console.log(todoData);

  res.json(todoData);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.lenth) {
    res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  todoData = todoData.filter((v, i) => {
    return parseInt(id) !== i;
  });

  console.log(todoData);

  res.json(todoData);
});

module.exports = router;
