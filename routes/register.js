const express = require('express')
const pool = require('../config/db-config')
const bcrypt = require('bcryptjs')

const router = express.Router()

const q = "INSERT INTO users VALUES(null, ?, ?, ?, ?)"

router.post('/register', (req, res) => {
  pool.execute("SELECT * FROM users WHERE email=?", [req.body.email], async (e, rows) => {
    if(e) {
      res.send({ e, code: 500 })
    } else {
      const hash = await bcrypt.hash(req.body.password, 10)
      const params = [req.body.name, req.body.phoneNumber, req.body.email, hash]
      
      pool.execute(q, params, (e, result) => {
        if(e) {
          res.send({
            e, 
            code: 400
          })
        } 
        else {
          res.send({
            code: 200,
            message: "Success"
          })
        }
      })  
    }
  })
})

module.exports = router;