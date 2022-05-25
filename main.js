// var Director = {
//   firstname: "shimon",
//   lastname: "berry",
//   age: "27",
//   wage: "100,000",
// };

// var Employee = {
//   fullname: "shlomo hailo",
//   YearofBirth: "1993",
//   email: "shlomohilo@gmail.com",
//   city: "kiryat malachi",
//   street: "avradim",
// };
// var fruit = { name: "apple", type: "fruit", color: "red" };

// document.write(fruit.name);
// document.write("<br>" + fruit.type);

// var course = {
//   classname: "full stack",
//   classnum: "5",
//   numberofstudents: "5",
//   Studentnames: ["lior", "ran", "shlomo", "aviel", "sara"],
// };

// for (var i = 0; i < course.Studentnames.length; i++) {
//   document.write("<br>" + course.Studentnames[i]);
// }

// document.write(course["Studentnames"]);
// document.write(course["Studentnames"]);

// Kindergarten = {
//   teacher: "dina",
//   numberofkids: 10,
//   kidsnames: ["dani", "haim", "aadiel", "nati", "aldd","rom","ati","dolev","shir","yoni"]
// };
// for (var i=0;i<Kindergarten["kidsnames"].length;i++){
//     document.write("<br>"+Kindergarten["kidsnames"][i])
// }
// document.write("<br>"+ Kindergarten["kidsnames"])
// var userKey= prompt("Enter a key");
// document.write(Kindergarten[userKey]);

// var claSs ={}
// claSs.numclass = prompt("enter numcalss")
// claSs.numberofstudents =prompt("numberofstudents")
// claSs.age = prompt("age")
// console.log(claSs)

// +

// var Director ={};
// var KeyFromUser =0;
// var valueFromUser =0;
// for (var i = 0; i<4; i++){
//    KeyFromUser =prompt("enter key")
//  valueFromUser =prompt("enter value")
//  Director[KeyFromUser] = valueFromUser
// }
//  document.write(Director)

//  var UserName ={};

// for (var i = 0; i<2; i++){
//    var KeyFromUser =prompt("enter key")
//  var ValueFromUser =prompt("enter value")
//  UserName[KeyFromUser]=ValueFromUser
//  document.write("<div>"+UserName[KeyFromUser]+ "<div>")
// }
//   var car ={company: "",Cc: "" , color:"",yearbook:""}
//  function someFunction(){
// var carsArray = []
//   for (var i = 0 ; i< 2 ;i++){
//     var car ={company: "",Cc: "" , color:"",yearbook:""}
//      car.company= prompt("enter comany")
//     car.Cc= prompt("enter cc")
//     car.color= prompt("enter color")
//     car.yearbook= prompt("enter yearbook")
//     carsArray.push(car);
//     document.write("<div>"+car.company+ " " +car.Cc+ " " + car.color + " " +car.yearbook+ "<div>"+"<br>")
//   }}

//   function cats (){
//     var  catsArray= []
// for (var i = 0; i < 3;i++){
//   var cat = {};
//   cat.name= prompt("enter name");
//   cat.YearofBirth=+prompt("enter Year of Birth");
//   cat.type=prompt("type");
//   cat.Weight=+prompt("Weight")
//   catsArray.push(cat)
// document.write("<h1>"+cat.name+ " " +cat.YearofBirth+ " " + cat.type+ " " +cat.Weight+"<h1>")
// }
// console.log(catsArray)

//   }
//   cats()

// console.log(catsArray)

// function dogObject (){

// var numuser = +prompt("enter num")
// var dogsArray = []
// for (var i=0;i<numuser;i++){
// var dog ={};
// dog.name= prompt("enter name")
// dog.age = +prompt("enter age")
// dog.type=("enter type")
// dog.owner=prompt("owner")
// dogsArray.push(dog)
// document.write("<p>"+dog.name+ " " +dog.age+ " " + dog.type + " " + dog.owner +"<p>"+"<br>")
// }
// console.log(dogsArray)
// }

// dogObject()
// function insectFunc (){
// var numUser = +prompt("enter num");
// var insectArray=[]
// for (var i=0;i<numUser;i++){
// var insect = {};
// insect.name= prompt("insect.name")
// insect.Scientificname = prompt("Scientific name")
// insect.Numberoflegs=+prompt("Number of legs")
// insect.Wings=confirm("Does he have wings?")
// if(insect.Wings==true){
//     insectArray.push(insect)
// document.write("<h3>"+insect.name + " " +insect.Scientificname + " " +insect.Numberoflegs+ " " +insect.Wings + "</h3>")
// }

// console.log(insectArray)

// insect.age= +prompt("insect.age")
// }
// }
// function insectFunc ()
// function KidOver4Age (){
// var usernum = +prompt("enter number");
// for (var i = 0; i < usernum; i++) {
//   var kid = {};
//   kid.fullName = prompt("enter full name");
//   kid.age = +prompt("enter age");
//   kid.Kindergarten = prompt("Is he in kindergarten?");
// if (kid.age>4){
//   document.write("<p>" + kid.fullName+ " " + kid.age+ " " + kid.Kindergarten + "<p>" +"<br>" )
// }}}
// KidOver4Age ()

// function comfuterFunc(x) {
//   for (var i = 0; i < x; i++) {
//     var computer = {};
//     computer.company = prompt("enter company");
//     computer.model = prompt("enter model");
//     computer.Weight = +prompt("enter Weight(Pounds)");
//     computer.Stock = +prompt("Stock (numbers)");
//     if (computer.Weight > 0 && computer.Stock > 0) {
//       document.write(
//         "<p>" +
//           computer.company +
//           " " +
//           computer.model +
//           " " +
//           computer.Weight +
//           " " +
//           computer.Stock +
//           "</p>"
//       );
//     }
//   }
// }
// comfuterFunc(2);

// function teacherFunc(num) {
//   for (var i = 0; i < num; i++) {
//     var teacher = {};
//     teacher.fullname = prompt("enter name");
//     teacher.Hourlywage = +prompt("Hourly wage");
//     teacher.email = prompt("enter email");
//     teacher.YearofBirth = +prompt("enter Year of Birth(YYYY)");
//     if (teacher.Hourlywage > 100 || teacher.YearofBirth < 1990) {
//       document.write(
//         "<span>" +
//           teacher.fullname +
//           " " +
//           teacher.Hourlywage +
//           " " +
//           teacher.email +
//           " " +
//           teacher.YearofBirth +
//           "</span>"
//           );
//     }
//   }
// }
// teacherFunc(2)
// function  furnitureFunc (x){
   
//     for (var i=0; i<x; i++){
//         var furniture= {}
//       furniture.name =prompt ("furniture.name")  
//       furniture.Brand = prompt("furniture.Brand")
//       furniture.price= +prompt("enter price")
//       furniture.Stores= prompt("enter stores")
//       document.write("<p>"+ furniture.name+"<p>" +"<br>"
//      +"<p>"+ furniture.Stores+"</p>")
//     }
   
    
// }
// furnitureFunc()


// function CountryFunc (){
// var numusero= +prompt("ener number")
// for (var i=0; i<numusero;i++){
//     var Country = {}
//     Country.name = prompt("enter Country")
//     Country.Residents= +prompt("number of residents")
//     Country.Cities=[prompt("enter city"), prompt("enter city"),prompt("enter city")]
//     Country.ChabadHouse=confirm("Is there a Chabad house?")
//     if (Country.ChabadHouse==true){
//         document.write("<h1>"+Country.name + "</h1>"+"<h3>"+ Country.Cities +"</srhbdfhdth3>")
//     }



// }}
// CountryFunc ()