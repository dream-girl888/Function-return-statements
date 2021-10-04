const checkNumbers = function (number){
 const Getal = number;
 if (Getal<100){
   return "false";
}else return "true";
 
 
}
const result1 = checkNumbers (120);
console.log (result1);

const result2 = checkNumbers (10);
console.log (result2);

//Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
//do something want er komen niet 1 of meer waardes eruit zoals een rekenmachine



/*
 To make these decisions we'll give Brenda the following arguments:
 
 the maximum number of people in the club 10
 the current number of people in the club 2
 the age of the person wanting to enter the club 18
 */



const Brenda = function (people){ 
  if (people <10){
    return "come in";
 } else return "It's too busy now, come back late"
  
 };

 const result3 = Brenda (100);
 console.log (result3);
 
 const result4 = Brenda (10);
 console.log (result4);


 const average = function (numberA, numberB, numberC, numberD,numberE){
   const total = numberA+ numberB+ numberC + numberD + numberE;
   const calaverage= total/5;
   return 
 }
 const result5 = average ([1,7,5,8,4]);
 console.log (result5);

