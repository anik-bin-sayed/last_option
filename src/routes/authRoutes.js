const express = require("express");
const {
  handleRegister,
  handleVerifyEmail,
  handleCheckAuth,
  handleLogout,
  handleLogin,
  handleForgotPassword,
  handleResetPassword,
  handleChangePassword,
} = require("../controller/authController");
const authMiddleware = require("../middlewares/auth.middleware");

const authRouter = express.Router();

authRouter.post("/register", handleRegister);
authRouter.post("/verify-email", handleVerifyEmail);

authRouter.post("/login", handleLogin);
authRouter.post("/logout", handleLogout);

authRouter.post("/forget-password", handleForgotPassword);
authRouter.put("/change-password", authMiddleware, handleChangePassword);

authRouter.post("/reset-password/:token", handleResetPassword);

authRouter.get("/check-auth", authMiddleware, handleCheckAuth);

module.exports = authRouter;
