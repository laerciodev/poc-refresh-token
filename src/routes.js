const { Router } = require("express");

const authController = require("./controllers/authController.js");

const router = Router();

router.post("/create-user", authController.createUser);
router.post("/authenticate", authController.authenticate);

module.exports = router;
