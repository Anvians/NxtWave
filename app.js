const express = require('express')
const {addDays, format} = require('date-fns')
const app = express()

app.get('/', (req, res) => {
  const today = new Date()
  const futureDate = addDays(today, 100)
  const formattedDate = format(futureDate, 'dd/MM/yyyy')
  res.send(formattedDate)
})

module.exports = app
