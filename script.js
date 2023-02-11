/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
function getname(student){
    if(student.marks>50)
    console.log(student.name);
}
  arr.map(getname);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  function getname(student){
    if(student.marks>50)
    console.log(student.name);
}
  arr.forEach(getname);
}

function addData() {
  //Write your code here, just console.log
  let a={
    id:4,
    name :"shibu",
    age :23,
    marks :100
}
arr.push(a);
console.log(a);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++){
   if(arr[i].marks<50)
   arr.splice(i,1);
}
console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newarr = [
  { id: 5, name: "first", age: "14", marks: 79 },
  { id: 6, name: "second", age: "10", marks: 86 },
  { id: 7, name: "third", age: "12", marks: 98 },
];
let concatarr=arr.concat(newarr);
console.log(concatarr);
}
