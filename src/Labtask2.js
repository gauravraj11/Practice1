const electronicsTotal = products
  .filter(i => i.category === 'electronics')
  .reduce((acc, i) => acc + i.price, 0)


  const avgPrice = products.reduce((acc, i) => acc + i.price, 0) / products.length


  const mostExpensive = products.reduce((max, i) => 
  i.price > max.price ? i : max
, products[0])


const categoryCounts = products.reduce((acc, i) => {
  acc[i.category] = (acc[i.category] || 0) + 1
  return acc
}, {})

console.log(categoryCounts)