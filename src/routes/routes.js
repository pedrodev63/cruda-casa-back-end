const router = require("express").Router()
const UserController =require("../controllers/userController")
const HouseController = require("../controllers/houseController")

// User Routes
router.get('/user',UserController)
router.get('/user/:id',UserController)
router.post('/user',UserController)
router.put('/user/:id',UserController)
router.delete('/user/:id',UserController)

// House Routes
router.get('/house',HouseController)
router.get('/house/:id',HouseController)
router.post('/house',HouseController)
router.put('/house/:id',HouseController)
router.delete('/house/:id',HouseController)

module.exports = router