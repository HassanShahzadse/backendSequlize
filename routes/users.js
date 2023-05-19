const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const {authUser, authRole} = require('../middleware/roleMiddleware');


router.get('/getUser', authMiddleware, userController.getAllUsers);
router.get('/getUserById', userController.getUserById);
router.post('/createUser', userController.createUser);
router.put('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.deleteUser);
router.get('/adminPage',authRole,userController.adminPage)
router.get('/homePage',userController.homePage)
router.get('/dashboard',authUser, userController.dashboard)

module.exports = router;
 