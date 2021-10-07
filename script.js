const checkNumbers = function (number){
 const Getal = number;
 if (Getal<100){
   return "false";
}else return "true";

}
console.log (checkNumbers(120)); //true
console.log (checkNumbers(10)); //false

//Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
//produceert wat want heeft geen console.log nodig



/*
 3 argumenten inzetten zodat Brenda beslist of je in mag, te druk is of niet mag binnenkomen:
 
 the maximum number of people in the club 10
 the current number of people in the club varieert
 the age of the person wanting to enter the club 18
 */



 const getBouncerReaction = function(
  maxBezoekers,
  huidigeBezoekers,
  leeftijd) 
  {
  if (leeftijd < 18) {
      return "this is a club for adults";
  }

  if (huidigeBezoekers<= maxBezoekers) {
      return "come in";
  } else {
      return "it's too busy now, come back later";
  }
};

console.log(getBouncerReaction(10, 2,8)); // "this is a club for adults"
console.log(getBouncerReaction(10, 5, 34)); // "come in"
console.log(getBouncerReaction(10, 45, 40)); // "it's too busy now, come back later"
console.log(getBouncerReaction(10, 23, 35)); // "it's too busy now, come back later"


//Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this? doet iets want geeft een alert

//function dat gemiddelde berekent van 5 nummers
 const GemiddeldeBerekenen = function(
  number1,
  number2,
  number3,
  number4,
  number5
) {
  const totaal = number1 + number2 + number3 + number4 + number5;
  const gemiddelde = totaal / 5;
  return gemiddelde;
};

console.log(GemiddeldeBerekenen(9, 8, 6, 3, 1)); // 5,4
console.log(GemiddeldeBerekenen(8, 0, 3, 5, 5)); // 4,2
console.log(GemiddeldeBerekenen(780, 8, 5, 90, 56)); // 187,8

//afronden getallen van het gemiddelden
const GemiddeldeBerekenen2 = function(
  number1,
  number2,
  number3,
  number4,
  number5
) {
  const totaal2 = number1 + number2 + number3 + number4 + number5;
  const gemiddelde2 = totaal2 / 5;
  const gemiddeldeAfgerond = Math.round(gemiddelde2);
  return gemiddeldeAfgerond;
};

console.log(GemiddeldeBerekenen2(9, 8, 6, 3, 1)); // 5
console.log(GemiddeldeBerekenen2(8, 0, 3, 5, 5)); // 4
console.log(GemiddeldeBerekenen2(780, 8, 5, 90, 56)); // 188

//Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this? produceert iets want berekent uit










































































