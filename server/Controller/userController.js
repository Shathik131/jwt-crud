const express = require("express");
const router = express.Router();
const userModel = require("../Model/userModel");

//get all data
router.get("/", async (req, res) => {
  const getAllData = await userModel.find();
  res.send(getAllData);
});

// sign-up

router.post("/sign-up", async (req, res) => {
  const { name, email, password, phone, avatar } = req.body;

  const postData = new userModel({
    name,
    email,
    password,
    phone,
    avatar,
  });

  await postData.save();
  res.send("data posted");
});

//sign-in
router.post("/signin", async (req, res) => {
  const { name, password } = req.body;

  const user = await userModel.findOne({ name });
  // console.log(user);

  if (!user) {
    return res.status(401).json({ error: "invalid user" });
  }

  if (password !== user.password) {
    return res.status(401).json({ error: "invalid password" });
  }

  const userData = {
    name: user.name,
    password: user.password,
  };

  res.send({ success: true, message: "sign-in successfully", data: userData });
});

//uniq data

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const uniqId = await userModel.findById(id);
    res.send(uniqId);
  } catch (error) {
    res.send(error);
  }
});

// update data
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, password, phone, avatar } = req.body;

  try {
    await userModel.findByIdAndUpdate(id, {
      name,
      email,
      password,
      phone,
      avatar,
    });

    res.send("data updated");
  } catch (err) {
    res.send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await userModel.findByIdAndDelete( id);

    res.send("data deleted");
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
