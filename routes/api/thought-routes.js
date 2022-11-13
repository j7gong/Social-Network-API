const router = require('express').Router();
const { 
    getAllThought,
    addThought, 
    removeThought,
    deleteThought
} = require('../../controllers/thought-controller');

// set up GET all at /api/Thoughts
router
    .route('/')
    .get(getAllThought);

router
    .route('/:id')
    .delete(deleteThought);

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addThought);

// /api/thoughts/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;