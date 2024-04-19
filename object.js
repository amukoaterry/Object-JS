// 1.) Given an array of objects, each object representing a person with a name and age property, 
// write a function that returns a new array containing the names of all people who are 18 years old or older.

const people= [
    { name: 'Alice', age: 17},
    { name: 'Eunice', age: 22},
    { name: 'Charlie', age: 14},
    { name: 'Max', age: 19},
  ];

  
  function personalInfo(person){
    return person.filter(i=>i.age >=18).map(i=>i.name)
  }
  console.log(personalInfo(people));

  
// 2.)Write a function that takes an array of objects, where each object represents a product with a name, price, and category property.
//The function should return an object that groups the products by their categories, with the category names as keys and the arrays of products as values.

const products=[
    { name: 'Laptop', price: 1200, category: 'Electronics'},
    { name: 'Shirt', price: 25, category: 'Clothing'},
    { name: 'Headphones', price: 80, category: 'Electronics'},
    { name: 'Shoes', price: 60, category: 'Clothing'},
  ];

  function productss(){
    groups = Object.groupBy(products,({categories})=>categories)
    console.log(groups);
  }
  productss()
  
// // 3.)Given an array of objects, where each object represents a student with a name and an array of scores, 
// //write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.

const students = [
    { name: 'John', scores: [90, 80, 85]},
    { name: 'Jane', scores: [95, 92, 88]},
    { name: 'Jim', scores: [70, 80, 75]},
    { name: 'Jill', scores: [85, 90, 84]},
  ];

  function avg(){
    const avg= (scores) =>{
      return scores.reduce((sum,score)=>sum+score,0)/scores.length;
    }
    const check= students.filter(students=>
      avg(students.scores)>=85);

      const names=check.map(student=>student.name);
      console.log(names)
  };

  avg()

// // // 4.)Given an object representing a car, with properties for the make, model, year, and a method to display the car's information, 
// // //write a function that takes the car object and adds a new method to the object called age. The age method should return the current age of the car based on the current year and the car's year property.

const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  function motorCar(){
    car.age = function(){
        let currentYear = 2024
        return currentYear - car.year
    }
    console.log(car.age())
}
motorCar()