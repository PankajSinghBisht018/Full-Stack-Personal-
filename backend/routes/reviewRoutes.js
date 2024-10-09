const express = require('express');
const { addOrUpdateReview, deleteReview } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/:isbn', authMiddleware, addOrUpdateReview);
router.delete('/:isbn', authMiddleware, deleteReview);

module.exports = router;
