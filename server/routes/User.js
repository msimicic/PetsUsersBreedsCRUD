const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

router.get("/", UserController.get);
router.post("/create", UserController.create);
router.put("/:id/update", UserController.update);
router.delete("/:id/delete", UserController.delete);

module.exports = router;
