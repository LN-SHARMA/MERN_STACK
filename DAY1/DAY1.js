//day1 of doin MERN stack
//Q1
let name = "laxminarayan";
const age = 21;
let course = "Cse";
const college = "chandigarh university" ;
console.log(name);
console.log(age);
console.log(course);
console.log(college);
//Q2
let mark= 82;
if(mark>90){
    console.log("A+");
}
else if(mark>80){
    console.log("A");
}
else if(mark>70){
    console.log('b+');
}
else if(mark>60){
    console.log('b');
}
else if(mark>50){
    console.log('c');
}
else{
    console.log('fail');
}
//Q3
for(let i=1;i<=10;i++){
    console.log(i);

}
//Q4
let m = [85,75,92,68,55];
let total =0;
for(let i=0;i<m.length;i++){
    total += m[i];
}
let avg = total/m.length;
console.log('total: '+ total);
console.log("average: "+avg);

//mini project
let S_name = "laxminarayan";
let S_uid = 12644;
let CN = 85;
let DM = 78;
let math = 92;
let t = CN+DM+math;
let percent = t/3;
console.log("==============================");
console.log("Student Record");
console.log(" ");
console.log("Name       : "+S_name);
console.log("UID        : "+S_uid);
console.log("CN         : " + CN);
console.log("DM         : " + CN);
console.log("Math       : " + math);
console.log(" ");
console.log("Total      : "+t);
console.log("percentage : "+percent);
if(percent>90){
    console.log("Grade      : A+");
}
else if(percent>80){
    console.log("Grade      : A");
}
else if(percent>70){
    console.log("Grade      : B");
}
else if(percent>60){
    console.log("Grade      : C");
}
else if(percent>50){
    console.log("Grade      : D");
}
else{
    console.log("Grade      : F")
}
if(percent>=40){
    console.log("Result     : Pass");
}
else{
    console.log("Result     : Fail");
}
console.log("==============================");
