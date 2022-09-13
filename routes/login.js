const router = require('express').Router()
const pool = require('../config/db-config')
const bcrypt = require('bcryptjs')
const User = require('../models/User')


router.post('/login', async (req, res) => {
  pool.query("SELECT * FROM users", async (e, rows) => {
    if(e) {
      res.send({
        message: "Data fetch error",
        code: 400
      })
    }

    const user = rows.find(user => user.email === req.body.email)

    if(user) {
      if(await bcrypt.compare(req.body.password, user.hash)) {
        res.send({
          message: "OK",
          code: 200
        })
      } else {
        res.send({
          message: "Credentials don't match",
          code: 404
        })
      }
    } else {
      res.send({
        message: "User not found",
        code: 404
      })
    }
  })
})

module.exports = router;
