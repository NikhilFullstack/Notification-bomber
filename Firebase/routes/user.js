const express = require("express");
const router = express.Router();

const {createUserWithPassword } = 
    require("../controller/user");
const { sendMessage } = require("../controller/messaging");


router.post("/createUser", createUserWithPassword);
// router.get("/getUserById/:id", getUserById);
// router.get("/getUserByEmail/:email", getUserByEmail);
// router.get("/getAllUser", getAllUsers);
router.get("/send", sendMessage);
// router.put("/deleteUser", deleteUser);
module.exports = router