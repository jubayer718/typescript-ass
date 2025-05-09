

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


class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year=year
  }

  public getInfo(): string{
    return `Make: ${this.make}, Year: ${this.year}`
  }
}

class car extends Vehicle {
  private model: string;

  constructor(make: string,year:number,model: string) {
    super(make, year);
    this.model = model;
  }
  public getModel(): string{
    return `Model: ${this.model}`
  }

} 


// const myCar = new car('Toyota', 2020, "corolla")
// console.log(myCar.getInfo());
// console.log(myCar.getModel());


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

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}


async function squareAsync(n:number):Promise<number> {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(
          new Error("Negative number not allowed")
        );
        
      } else {
        resolve(n*n)
      }
    }, 1000);
  })
}
