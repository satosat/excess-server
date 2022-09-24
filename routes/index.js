const express = require("express");
const router = express.Router();

const loginRouter = require("./login");
const vendorRouter = require("./vendors");
const registerRouter = require("./register");
const voucherRouter = require("./vouchers");

router.use(loginRouter);
router.use(vendorRouter);
router.use(registerRouter);
router.use(voucherRouter);

module.exports = router;
