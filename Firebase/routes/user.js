const express = require("express");
const router = express.Router();

const {createUserWithPassword,createUserWithGoogle, getUserById, 
    getUserByEmail, getAllUsers, logout } = 
    require("../controller/user");


router.post("/createUser", createUserWithPassword);
router.post("/googleAuth", createUserWithGoogle);
router.get("/getUserById/:id", getUserById);
router.get("/getUserByEmail/:email", getUserByEmail);
router.get("getAllUser", getAllUsers);
// router.put("/deleteUser", deleteUser);
router.put("/logout", logout)
module.exports = router