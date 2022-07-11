const express = require("express");
const server = express();

server.use(express.json());

server.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === "tony" && password === "123") {
      res.cookie("session", "hello nuxt");
      res.cookie("username", "汤尼");
      res.json({
        name: "tony",
        msg: "success login",
        code: 200,
      });
    } else {
      res.json({
        msg: "failed login",
        code: 400,
      });
    }
  } catch (error) {
    console.log(error);
    res.statusCode(500).send("服务器错误");
  }
});

server.listen(8888, () => {
  console.log("server running in 8888");
});
