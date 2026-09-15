function squre(number){
    return number*number;
}
console.log(squre(5));
function dispaly(){
    console.log("hello world");
}
//without parameter
dispaly();
//with parameter
function greet(name){
    console.log("hello "+name);
}
greet("LN");
//multiple paramenter
function addd(x,y){
    console.log(x+y);
}
addd(7000,171);
let result  =add(10,20);
let cal = result*2;
function add(x,y){
    return x+y;
}
console.log(result+" "+cal);
function disp(){
    return{
        name : "laxmi",
        age : 21,
        city : "noida"
    };
}
let dip = disp();
console.log(dip);
const sub = function(x,y){
    return x-y;
}
console.log(sub(10,8));
const sq = (x) => x*x;
console.log(sq(5));
// to  check if the number is even or odd
function checkEvenOdd(num){
    if(num%2==0){
        console.log("num is even");
    }
    else{
        console.log("num is odd");
    }
}
checkEvenOdd(10);
checkEvenOdd(11);
//cal percentage
let percentage = calper(10,20,30);
function calper(x,y,z){
    return (x+y+z)/3;
}
console.log(percentage);
//DAY 2 MINI PROJECT
console.log("===================================================");
console.log("                  Student Record");
console.log("===================================================");
const student = function(){
    return {
        name : "laxminarayan",
        age : 21,
        course : "MERN"
    };
}
const mark = function(){
    return {
        m1: 45,
        m2: 55,
        m3: 65
    };
}
let stud = student();
console.log(stud);
let m = mark();
console.log(m);
console.log(" ");
function caltotal(m1,m2,m3){
    return m1+m2+m3;
}
let total = caltotal(m.m1,m.m2,m.m3);
console.log("total marks: "+total);
function calper(x){
    return x/3;
}
let per =calper(total);
console.log("percentage: "+per+"%");
function calgrade(x){
    if (x >= 90) {
        return "A+";
    }
    else if (x >= 80) {
        return "A";
    }
    else if (x >= 70) {
        return "B";
    }
    else if (x >= 60) {
        return "C";
    }
    else if (x >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}
let g = calgrade(per);
console.log("grade: "+g);
function calres(x){
    if(x>=40){
        return "pass";
    }
    else{
        return "fail";
    }

}
let rs= calres(per);
console.log("result: "+rs);