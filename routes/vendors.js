const express = require('express')
const router = express.Router()

// id vendor: 1
// 1_1
// 1_2

router.get('/vendors', (req, res) => {
  res.send({
    vendor_one: {
      products: [
        {
          id: 1,
          name: "Bread",
          price: 15000,
          image_id: "1",
          limited_time: true,
          max_order_time: 2200
        },
        {
          id: 2,
          name: "Bread 2",
          price: 10000,
          image_id: "2",
          limited_time: false,
          max_order_time: null
        }
      ],
      vendor_image_id: "vendor_one",
      address: "vendor_one address",
      openingHour: 10,
      closingHour: 21,
      dummy_distance: 5.2
    }
  })
})

router.get('/home', (req, res) => {
  res.send({
    products: [
      {
        name: 'product 1',
        vendor_id: '1',
        price: 5000,
        limited_time: true,
        max_order_time: 2200
      },
      {
        name: 'product 3',
        vendor_id: '1',
        price: 5000,
        limited_time: true,
        max_order_time: 2200
      },
      {
        name: 'product 2',
        vendor_id: '1',
        price: 5000,
        limited_time: true,
        max_order_time: 2200
      }
    ]
  })
});

module.exports = router;