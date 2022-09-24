const express = require("express");
const router = express.Router();

router.get("/vendors", (req, res) => {
  res.status(200).send({
    vendor_name: "Pastry Food",
    vendor_cuisine_type: "Cake",
    vendor_address: "Alam Sutera",
    vendor_id: 1,
    products: [
      {
        name: "product 1",
        product_id: "1",
        vendor_id: "1",
        vendor_image_id: "1_1",
        price: 5000,
        limited_time: true,
        max_order_time: 2200,
      },
      {
        name: "product 2",
        product_id: "3",
        vendor_id: "1",
        vendor_image_id: "1_3",
        price: 5000,
        limited_time: true,
        max_order_time: 2200,
      },
      {
        name: "product 3",
        product_id: "3",
        vendor_id: "1",
        vendor_image_id: "1_3",
        price: 5000,
        limited_time: true,
        max_order_time: 2200,
      },
    ],
  });
});

router.get("/home", (req, res) => {
  res.status(200).send({
    products: [
      {
        name: "product 1",
        vendor_id: "1",
        price: 5000,
        limited_time: true,
        max_order_time: 2200,
      },
      {
        name: "product 3",
        vendor_id: "1",
        price: 5000,
        limited_time: true,
        max_order_time: 2200,
      },
      {
        name: "product 2",
        vendor_id: "1",
        price: 5000,
        limited_time: true,
        max_order_time: 2200,
      },
    ],
  });
});

module.exports = router;
