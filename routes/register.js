const express = require("express");
const pool = require("../config/db-config");
const bcrypt = require("bcryptjs");

const router = express.Router();

const q = "INSERT INTO users VALUES(null, ?, ?, ?, ?)";

router.post("/register", (req, res) => {
  pool.execute(
    "SELECT * FROM users WHERE email=?",
    [req.body.email],
    async (e, rows) => {
      if (e) {
        res.status(500).send({
          error: true,
          code: 500,
          message: e,
        });
      } else {
        const hash = await bcrypt.hash(req.body.password, 10);
        const params = [
          req.body.name,
          req.body.phoneNumber,
          req.body.email,
          hash,
        ];

        pool.execute(q, params, (e, result) => {
          if (e) {
            res.status(400).send({
              message: e,
              code: 400,
              error: true,
            });
          } else {
            res.status(200).send({
              code: 200,
              message: "Success",
              error: false,
            });
          }
        });
      }
    }
  );
});

module.exports = router;
