
//Write a program find the larges number of array in javascript
console.log("find the larges number Using sort method");
let arr = [10,20,30,40,80,45,100];
let maxnum = arr.sort((a,b) => b-a)[0];
console.log(maxnum);

function maxnumber(){
    let max = arr[0]
    for(let i=0; i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log("Using Pure javascript");
console.log(maxnumber())
console.log("------------------------------------")

//Write a program find the second larges number of array in javascript
console.log("find the second larges number Using sort method");
let arr1 = [20,40,60,80,100,120,140];
let secondnum = arr1.sort((a,b)=> b-a)[1];
console.log(secondnum);

let arr2 = [20,40,60,80,100,120,140];
function minnumber(){
    let maxnumb = arr2[0];
    let secondmax = arr2[0];
    for(let i=0; i<arr2.length;i++){
        if(arr2[i] > maxnumb){
            secondmax = maxnumb;
            maxnumb = arr2[i]
        }else if(maxnumb > arr2[i] > secondmax){
            secondmax = arr2[i]
        }
    }
    return secondmax;
}
console.log("Using Pure javascript");
console.log(minnumber());
console.log("------------------------------------")

console.log("Find Minimum Number Using sort method");
let arr3 = [20,40,60,80,100,120,140];
let minimum = arr3.sort((a,b)=> a-b)[0];
console.log(minimum);

function mininum(){
    let min = arr3[0];
    for(let i=0; i<arr3.length;i++){
        if(arr3[i] < min){
            min =arr3[i]
        }
    }
    return min
}
console.log("Using Pure javascript");
console.log(mininum());
console.log("------------------------------------")

console.log("Find Second Minimum Number Using sort method");
let arr4 = [20,40,60,80,100,120,140];
let seconmin = arr4.sort((a,b)=> a-b)[1];
console.log(seconmin)

let arr5 = [20,40,60,80,100,120,140];
function secondminim(){
    let secondminim = arr5[0];
    let minimumb =  arr5[1];
    if(arr5.length == 1){
        return arr5[0]
    }
    for(let i=0; i< arr5.length;i++){
        if(arr5[i] < secondminim){
            minimumb = secondminim;
            secondminim = arr5[i]
        }else if(arr5[i] < minimumb){
            minimumb = arr5[i]
        }
    }
    return minimumb;
}
console.log(secondminim())



//Write a program update salary of sam in array object
let employees = [
    {id:1, name: "Sumit",salary: 50000},
    {id:2, name: "Samadhan",salary: 20000},
    {id:3, name: "Pramod",salary: 15000},
    {id:4, name: "Manoj",salary: 3500},
    {id:5, name: "Dipmal",salary: 30000},
    {id:6, name: "Deep",salary: 30000},
];


//Updata Deep Salary
let update = [
    {id: 1, name: "Sumit", salary: 1000},
    {id: 2, name: "Samadhan", salary: 5000},
]
let key = "id";
let updateSalary = employees.map((el)=> {
    let found = update.find((i)=> i[key] === el[key]);
    if(found){
        el = Object.assign(el, found)
    }
    return el;
})
let str = `<ul>`;
updateSalary.forEach((employee)=>{
    str+= `<li>${employee.name}</li><li>${employee.salary}</li>`
})

//addition of total number
let total = updateSalary.map((i) => i.salary).reduce((a,b)=> a + b, 0);
str += `</ul><ul><li><b>Total:</b></li><li><b>${total}</b></li></ul>`;
document.getElementById("data").innerHTML = str;

