//დავალება 1
// function zeronum(m,n) {
//     if(m<n) {
//         return n;}
//         else if(m>n){
//             return m;
//         }
//         else {
//             return 0;} 
// }
// console.log(zeronum(7,5))

//davaleba 2
// function sum(a, b) {
//     return a + b;
//   }
//   console.log(sum(4,9))
//davaleba 3
// function fullName(){
//     console.log("Lasha Urekadze");
// }
// fullName();
//დავალება 4
// function fullName(firstName,lastName){
//     return firstName+ " " + lastName;
// }
// console.log(fullName("Lasha", "Urekadze"));
//დავალება 5
// function algebra(n){
//     let nom = 1;
//     for (let i = 1; i <= n; i++) {
//         nom *= i;
//     }
//     return nom
// }
// console.log(algebra(7));
// console.log(algebra(9));
//დავალება 6
// let student = {
//     firstName: "Lasha",
//  lastName: "Urekadze",
//    age: 33,
//   scores: [4, 7, 5, 3, 2],
//    fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(student.fullName()); 
//დავალება 7
// let student = {
//         firstName: "Lasha",
//      lastName: "Urekadze",
//        age: 33,
//       scores: [4, 7, 5, 3, 2],
//        fullName: function () {
//           return this.firstName + " " + this.lastName;
//         },
//     };
// function scoreSum(scores) {
//     let sum = 0;
  
//     for (let i = 0; i < scores.length; i++) {
//       sum += scores[i];
//     }
  
//     return sum;
//   }
//   console.log(scoreSum(student.scores));
//დავალევა 8
// let student = {
//         firstName: "Lasha",
//      lastName: "Urekadze",
//        age: 33,
//       scores: [4, 7, 5, 3, 2],
//        fullName: function () {
//           return this.firstName + " " + this.lastName;
//         },
//     };
//     console.log(student.firstName + " " + student.age + " წლის");