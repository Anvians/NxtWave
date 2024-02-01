const {addDays, format} = require('date-fns')

const getDateAfterDays = days => {
  return format(addDays(new Date(2020, 7, 22), days), ' dd-MM-yyyy')
}

module.exports = getDateAfterDays
