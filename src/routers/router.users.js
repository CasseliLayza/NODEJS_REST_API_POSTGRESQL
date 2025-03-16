import { Router } from "express";
import {
  createtUsers,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controller/userController.js";

const router = Router();

router.post("/users", createtUsers);

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;
