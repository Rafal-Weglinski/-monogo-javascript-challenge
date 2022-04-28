const axios = require('axios').default
const { API_URL } = require('./constants.js')

const loadData = async () =>
  axios
    .get(API_URL)
    .then(({ data }) => data)
    .catch(() =>
      console.log(
        'There was a problem while fetching data, please try again later'
      )
    )

exports.loadData = loadData
