// Ex1.1 - Yes or No
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

// Ex2.1 - Sum of lowest numbers
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
}

// Ex2.2 - One and Zero - Binary
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
};

// Ex2.3 - Find the Next Perfect Square
function findNextSquare(sq) {
  let root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2);
  } else {
    return -1;
  }
}

// Ex2.4 - Unique
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// Ex2.5 - Summation
const summation = num => num * (num + 1) / 2;

// Ex2.6 - Years and Centuries
function centuryFromYear(year) {
  return Math.ceil(year/100);
}

// Ex2.7 - Basic Math
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Ex3.1 - Growth Of population
function nb_year(p0, percent, aug, p) {
  let years = 0;
  while(p0 < p){
    p0 += p0 * percent/100 + aug;
    years++;
  }
  return years;
}

// Ex3.2 - People on the Bus
var number = function(busStops){
  return busStops.reduce((rem, [on, off]) => rem + on - off, 0);
}

// Ex4.1 - Fibonacci
function fibonacci(n) {
  let fib = [0, 1];
  for(let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

// Ex4.2 - Tribonacci
function tribonacci(signature,n){
  let tri = signature;
  for (let i = 3; i < n; i++){
    tri[i] = tri[i-1] + tri[i-2] + tri[i-3];
  }
  return tri.slice(0, n);
}

// Ex5.1 - trimming string
function removeChar(str){
 return str.slice(1,-1);
}

// Ex5.2 - String Repeat
function repeatStr (n, s) {
  return s.repeat(n);
}

// Ex5.3 - To Camel Case
function toCamelCase(str){
  let words = str.split(/-|_/);
  return words.map((word, index) => {
    if(index == 0) return word;
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
}

// Ex5.4 - To Weird Case
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}

// Ex5.5 - Abbreviate two words
function abbrevName(name){
  return name.split(' ').map(x => x[0].toUpperCase()).join('.');
}

// Ex5.6 - Mask
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// Ex5.7 - shortest words
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

// Ex5.8 - shortest words version 2
function findLong(s){
  return Math.max.apply(null, s.split(' ').map(w => w.length));
}
