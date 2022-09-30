const router = require("express").Router(),
    user = require("./user.controller")

router.post(`/register`, user.register)

module.exports = router