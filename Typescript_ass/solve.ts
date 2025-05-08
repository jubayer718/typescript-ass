

function formatString(input: string, toUpper?: boolean):string {
  if (toUpper===false) {
    return  input.toLowerCase();
  } else {
   return input.toUpperCase();
  }
}


function filterByRating(items: { title: string; rating: number }[]) {
  const filteredValue = items.filter((item) => item.rating>4||item.rating===4)
  return filteredValue
}


function concatenateArrays<T>(...arrays: T[][]) {
  let concatValue = arrays.reduce((acc, curr) => acc.concat(curr), [])
  return concatValue
  
}


function processValue(value: string | number):string|number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value*2
  }
}




interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]) {
  if (products.length === 0) {
    return null 
  }

  let mostExpensiveProduct = products[0];

  for (let product of products) {
    if (product.price > mostExpensiveProduct.price) {
    mostExpensiveProduct = product
    }
    
  }
  return mostExpensiveProduct

}



const product = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(product));