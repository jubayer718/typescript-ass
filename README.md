## Some difference between interface and type in typescript 


* Interface can be declared multiple time.
* Type  cannot be redeclare with the same name. 
* Interface: Use extends to inharit from other interface. 
* Type: Use &(intersection) to combine multiple types.
* Interface: Best for defining object shape specially when working with classes or large structure. 
* Type: More flexible. when we use union, tuple, function
ETC


## enums 

* In TypeScript, an enums is a special type used to define a set of named constants. Enums help make our code more readable, organized.

## why we use enums

* When we want to keep a value within a specific set.
* To write readable and maintainable code.
and have Many more uses.

### Example of Numeric Enum 
```

enum Direction{
  up,
  Down,
  Left,
  Right
}

let move: Direction= Direction.left;
console.log(move) // Output: 2;
```
 
### Example of string Enum 
```
enum Status{
  Success= "SUCCESS",
  Failure= "FAILURE",
  Pending= "PENDING"
}

let response:Status= Status.Success;
console.log(response); // Output: "SUCCESS"

```

## Union and intersection 

### Union:
* A union type allows a variable to be one of several types.  

#### Example of intersection:
```
type ID= string | number;
let userId: ID;
userId = 123;  //yes
userId="abc123; //yes
userId= true: //no

```

### Intersection(&) 
* An intersection type combine multiple types into on type that must satisfy all of them. 

```
type Person={
  name:string;
  age: number;
}

type Employee = {
  employeeId: number;
  department: string;
}

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "yusaf",
  age 28,
  employeeId; 1001,
  department:"IT"
}

```
