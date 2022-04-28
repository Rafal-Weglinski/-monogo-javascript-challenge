const sortProducts = ({ products, colors, sizes }) =>
  products.reduce((prev, { id, price }) => {
    const { value: color } = colors.find((items) => items.id === id)
    const { value: size } = sizes.find((items) => Number(items.id) === id)
    return [...prev, { id, price, color, size }]
  }, [])

const filterProductsByPrice = (products, { colors, sizes }) =>
  products.filter(
    ({ price, color, size }) =>
      price > 200 && colors.includes(color) && sizes.includes(size)
  )

const multiplyMinMax = (products) => {
  const { price: maxPrice } = products.reduce((prev, current) =>
    prev.price > current.price ? prev : current
  )
  const { price: minPrice } = products.reduce((prev, current) =>
    prev.price < current.price ? prev : current
  )

  return Math.round(maxPrice * minPrice)
}

const composeArray = (input) => {
  const inputAsArray = Array.from(String(input), Number)

  return inputAsArray.reduce(
    (prev, curr, index) =>
      index % 2 === 0
        ? [...prev, +curr + (+inputAsArray[index + 1] || 0)]
        : [...prev],
    []
  )
}

exports.sortProducts = sortProducts
exports.filterProductsByPrice = filterProductsByPrice
exports.multiplyMinMax = multiplyMinMax
exports.composeArray = composeArray
