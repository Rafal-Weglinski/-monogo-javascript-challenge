const { loadData } = require('./api.js')
const { COMPANY_NAME, BUILDING_NUMBER } = require('./constants.js')
const {
  sortProducts,
  filterProductsByPrice,
  multiplyMinMax,
  composeArray,
} = require('./utils')

const solveChallenge = async () => {
  const data = await loadData()
  const sortedData = sortProducts(data)
  const filteredData = filterProductsByPrice(sortedData, data.selectedFilters)
  const minMax = multiplyMinMax(filteredData)
  const finalArray = composeArray(minMax)

  const result =
    minMax *
    COMPANY_NAME.length *
    finalArray.findIndex((number) => number === BUILDING_NUMBER)

  console.log(result)
}

solveChallenge()
