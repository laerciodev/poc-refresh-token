const { Router } = require("express");

const authController = require("./controllers/authController.js");

const router = Router();

router.post("/create-user", authController.createUser);

module.exports = router;
