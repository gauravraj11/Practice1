// show only products rated above 4
product.filter(i => i.rating.rate > 4)

// show only products in electronics category
.filter(i => i.category === 'electronics')

// show only first 5 products  (slice, not filter — bonus trick)
.slice(0, 5)

// show products with price between 10 and 100
.filter(i => i.price >= 10 && i.price <= 100)

// show products whose title includes the word "gold"
.filter(i => i.title.toLowerCase().includes('gold'))