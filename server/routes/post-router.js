const express = require("express")
const router = express.Router()
const postController = require("../controllers/post-controller")
const authenticate = require("../middlewares/authenticate")

router.post("/add", authenticate, postController.create)
router.get("/all", postController.findAll)
router.get("/tag/:tag", postController.findTag)
router.get("/myposts", authenticate, postController.findMyPosts)
router.put("/edit", authenticate, postController.update)
router.put("/upvote", authenticate, postController.upvote)
router.put("/downvote", authenticate, postController.downvote)
router.put("/unvote", authenticate, postController.unvote)
router.delete("/delete", authenticate, postController.delete)
router.get("/potd", postController.fetchPOTD)

module.exports = router