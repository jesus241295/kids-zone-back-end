const express = require("express");
const usersCase = require("../usecases/users.case");
const router = express.Router();

router.get("/", async (req, res) => {
  const getUsers = await usersCase.getUser({});
  res.json(getUsers);
});

router.post("/", async (req, res) => {
  const userCreate = await usersCase.postsUsers(req.body);
  res.statusCode = 201;
  res.json(userCreate);
});
module.exports = router;
