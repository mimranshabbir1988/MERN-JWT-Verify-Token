import express from "express";
import { registerController, loginController, dummyController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router()


// routing 
// METHOD POST & register
router.post("/register", registerController)

// METHOD POST & login
router.post("/login", loginController)

// METHOD GET & Dummy
router.get("/dummy", requireSignIn, isAdmin, dummyController)


export default router;

