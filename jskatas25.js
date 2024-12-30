// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

function sumSellCount(products) {
  let total = 0
  for (let i = 0; i < products.length; i++) {
    total += products[i].sellCount
  }
  return total / products.length
}
console.log(sumSellCount(products))
