const express = require('express')
const morgan = require('morgan')

const router = require('./routes/index')

const app = express();
const PORT = 3000;

// Parse request body to JSON format
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static('public'))

app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})