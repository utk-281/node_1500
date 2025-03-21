const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  updateUserProfile,
  deleteUserPicture,
} = require("../controllers/user.controller");
const upload = require("../middlewares/multer.middleware");
const { authenticate } = require("../middlewares/authenticate.middleware");
const router = Router();

router.post("/register", upload.single("profilePicture"), registerUser);
router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.patch("/update-profile", authenticate, updateUserProfile);

router.patch("/delete-picture", authenticate, deleteUserPicture);

module.exports = router;
