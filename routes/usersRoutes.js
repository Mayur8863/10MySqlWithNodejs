const router = require("express").Router();

const controllers = require("../controllers/usersControllers");
router.get("/get",controllers.userGetAllControllers);
router.post("/post",controllers.userpostControllers);


module.exports = router;