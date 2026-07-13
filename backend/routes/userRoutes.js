const { Router } = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/userController");

const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.get("/:id",getUser);
// router.get("/test", (req, res) => {
//     res.json({
//         message: "User route working"
//     });
// });
module.exports = router;