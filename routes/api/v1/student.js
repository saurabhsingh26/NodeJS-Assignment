const express = require('express');

const router = express.Router();

const studentController = require('../../../controllers/api/v1/student_api');
router.post('/create',studentController.create);
router.get('/all-students',studentController.allStudents);
router.get('/:id',studentController.studentById);
router.post('/:id/update',studentController.update);
router.delete('/:id/delete',studentController.delete);

module.exports = router;