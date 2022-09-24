const router = require("express").Router();
const pool = require("../config/db-config");

router.get("/voucher", (req, res) => {
  // pool.query("SELECT * FROM vouchers", (e, result) => {
  //   if (e) {
  //     res.send({
  //       message: "Error",
  //       code: 500
  //     })
  //   } else {
  //     console.table(result)
  //     res.send({
  //       vouchers: result
  //     })
  //   }
  // })
  res.status(200).send({
    vouchers: [
      {
        id: 1,
        discountPercentage: 35,
        minimumPrice: 40000,
        maximumDiscount: 30000,
      },
      {
        id: 2,
        discountPercentage: 25,
        minimumPrice: 20000,
        maximumDiscount: 10000,
      },
      {
        id: 3,
        discountPercentage: 15,
        minimumPrice: 15000,
        maximumDiscount: 35000,
      },
      {
        id: 4,
        discountPercentage: 20,
        minimumPrice: 25000,
        maximumDiscount: 30000,
      },
      {
        id: 5,
        discountPercentage: 30,
        minimumPrice: 35000,
        maximumDiscount: 45000,
      },
      {
        id: 6,
        discountPercentage: 10,
        minimumPrice: 10000,
        maximumDiscount: 15000,
      },
      {
        id: 7,
        discountPercentage: 40,
        minimumPrice: 40000,
        maximumDiscount: 20000,
      },
      {
        id: 8,
        discountPercentage: 30,
        minimumPrice: 40000,
        maximumDiscount: 50000,
      },
      {
        id: 9,
        discountPercentage: 30,
        minimumPrice: 0,
        maximumDiscount: 50000,
      },
    ],
  });
});

module.exports = router;
