const router = require("express").Router();
const pool = require("../config/db-config");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/login", (req, res) => {
  pool.query("SELECT * FROM users", async (e, rows) => {
    if (e) {
      res.status(500).send({
        message: "Data fetch error",
        code: 500,
        error: true,
      });
    }

    const user = rows.find((user) => user.email === req.body.email);

    if (user) {
      if (await bcrypt.compare(req.body.password, user.hash)) {
        res.status(200).send({
          message: "OK",
          code: 200,
          error: false,
        });
      } else {
        res.status(404).send({
          message: "Credentials don't match",
          code: 404,
          error: true,
        });
      }
    } else {
      res.status(404).send({
        message: "User not found",
        code: 404,
        error: true,
      });
    }
  });
});

module.exports = router;
