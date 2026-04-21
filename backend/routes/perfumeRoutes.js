const express = require('express');
const router = express.Router();

const {
    getPerfumes,
    addPerfume
} = require('../controllers/perfumeController');

router.get('/', getPerfumes);
router.post('/', addPerfume);

module.exports = router;