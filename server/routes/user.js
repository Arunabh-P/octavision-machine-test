import express from "express";
import { getAllUsers, getOneUser, register } from "../controller/user.js";

const router = express.Router()
router.route("/register").post(register)
router.route('/finduser/:id').get(getOneUser)
router.route('/getAllUsers').get(getAllUsers)

export default router;