const express = require("express")
const router = express.Router()
const userController = require("../controllers/user-controller")
const authenticate = require("../middlewares/authenticate")

router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/tags", authenticate, userController.getWatchedTags)
router.put("/tag", authenticate, userController.addWatchedTag)
router.patch("/tag", authenticate, userController.editWatchedTags)


module.exports = router