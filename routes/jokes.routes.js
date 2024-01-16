const express = require('express');
const router = express.Router();

const jokesController = require('../controllers/jokes.controllers');


router.post("", jokesController.createBroma);
router.get("", jokesController.getBromas);
router.get("/:id", jokesController.getBromaById);
router.put("/random"), jokesController.getBromaRandom;
router.put("/:id", jokesController.updateBroma);
router.delete("/:id", jokesController.deleteBroma);


module.exports = router;