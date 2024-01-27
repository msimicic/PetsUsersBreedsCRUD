const express = require("express");
const router = express.Router();
const BreedController = require("../controllers/BreedController");

router.get("/", BreedController.get);
router.post("/create", BreedController.create);
router.put("/:id/update", BreedController.update);
router.delete("/:id/delete", BreedController.delete);

module.exports = router;
