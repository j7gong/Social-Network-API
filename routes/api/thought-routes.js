const router = require('express').Router();
const { 
    getAllThought,
    getThoughtById,
    addThought, 
    removeThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// set up GET all at /api/Thoughts
router
    .route('/')
    .get(getAllThought);

router
    .route('/:id')
    .get(getThoughtById)
    .delete(deleteThought)
    .put(updateThought);

// /api/thoughts/<userId>
router 
    .route('/:userId')
    .post(addThought);

// /api/thoughts/<thoughtId>
router.route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

// /api/thoughts/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;