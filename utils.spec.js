const {
  sortProducts,
  filterProductsByPrice,
  multiplyMinMax,
  composeArray,
} = require('./utils')

const initialData = {
  selectedFilters: { colors: ['black', 'blue'], sizes: [41, 43] },
  products: [
    { id: 161, price: 221.84 },
    { id: 246, price: 271.06 },
    { id: 279, price: 13.29 },
  ],
  colors: [
    { value: 'blue', id: 246 },
    { value: 'black', id: 161 },
    { value: 'black', id: 279 },
  ],
  sizes: [
    { id: '246', value: 41 },
    { id: '161', value: 41 },
    { id: '279', value: 43 },
  ],
}

const groupedData = [
  { id: 161, price: 221.84, color: 'black', size: 41 },
  { id: 246, price: 271.06, color: 'blue', size: 41 },
  { id: 279, price: 13.29, color: 'black', size: 43 },
]

const filteredData = [
  { id: 161, price: 221.84, color: 'black', size: 41 },
  { id: 246, price: 271.06, color: 'blue', size: 41 },
]

const minMax = 60132
const result = [6, 4, 2]

describe('/utils.js', () => {
  it('/sortProducts', () => {
    expect(sortProducts(initialData)).toEqual(groupedData)
  })
  it('/filterProductsByPrice', () => {
    expect(
      filterProductsByPrice(groupedData, initialData.selectedFilters)
    ).toEqual(filteredData)
  })
  it('/multiplyMinMax', () => {
    expect(multiplyMinMax(filteredData)).toEqual(minMax)
  })
  it('/composeArray', () => {
    expect(composeArray(minMax)).toEqual(result)
  })
})
