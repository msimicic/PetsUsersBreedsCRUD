const express = require("express");
const router = express.Router();
const PetController = require("../controllers/PetController");

router.get("/", PetController.get);
router.post("/create", PetController.create);
router.put("/:id/update", PetController.update);
router.delete("/:id/delete", PetController.delete);

module.exports = router;
