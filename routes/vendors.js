const express = require('express')
const router = express.Router()

router.get('/vendors', (req, res) => {
  res.send({
    vendor_one: {
      products: [
        {
          id: 1,
          name: "Bread",
          price: 15000,
          image_id: "1"
        },
        {
          id: 2,
          name: "Bread 2",
          price: 10000,
          image_id: "2"
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

module.exports = router;