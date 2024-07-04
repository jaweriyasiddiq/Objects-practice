/////////////////////////OBJECTS//////////////////////////////
//SIMPLE OBJECT
let person = {
  name: "jaweriya",
  age: 19,
};
//ACESSING
// WITH DOT NOTATION
console.log(person.name);
//WITH DYNAMICS
console.log(person["age"]);
//OBJECT WITH TYPE DECLEARATION
let person1: {
  name: string;
  age: number;
} = {
  name: "mutaiba",
  age: 18,
};
console.log(person1.name);
console.log(person1["age"]);
//TYPE ALIASED
type Car = {
  name: string;
  model?: number;
  color: string;
};
let car1: Car = {
  name: "civic",
  model: 2024,
  color: "white",
};
console.log(car1.model);
//WITH OPTIONAL PROPERTY
let car2: Car = {
  name: "toyota",
  color: "black",
};
console.log(car2.color);
//FOR ACCESSING KEYS OF OBJECTS
console.log(Object.keys(car1));
//FOR ACCESSING VALUES OF OBJECTS
console.log(Object.values(car1));
//FOR ACESSING BOTH KEYS AND VALUES
console.log(Object.entries(car1));
//INTERFACE
interface studentInfo {
  name: string;
  gender: string;
  slot: string;
  Isseniorstudent: boolean;
}
let student1: studentInfo = {
  name: "mutaiba",
  gender: "female",
  slot: "thursday morning",
  Isseniorstudent: true,
};
console.log(student1["Isseniorstudent"]);
//NESTED OBJECT
let employee = {
  name: "ali",
  gender: "male",
  qualification: "bsc",
  address: {
    karachi: {
      street: "street1",
      postalcode: 123456,
      district: "south",
    },
  },
};
console.log(employee.address.karachi.postalcode);
