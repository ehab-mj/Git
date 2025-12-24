// Ex6.1 - Mumbling
function accum(s) {
  return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
}

// Ex6.2 - Counting Duplicates
function duplicateCount(text){
  let lowerText = text.toLowerCase();
  let count = 0;
  let counts = {};
  for(let char of lowerText){
      counts[char] = counts[char] ? counts[char]+1 : 1;
  }
  for(let key in counts){
      if(counts[key] > 1){
          count++;
      }
  }
  return count;
}

// Ex6.3 - organize strings
function longest(s1, s2) {
  let merged = s1 + s2;
  let sortedUnique = Array.from(new Set(merged.split(''))).sort().join('');
  return sortedUnique;
}

// Ex6.4 - isogram
function isIsogram(str){
  str = str.toLowerCase();
  let counts = {};
  for(let char of str){
      if(counts[char]){
          return false;
      }
      counts[char] = 1;
  }
  return true;
}

// Ex7 - Implement The Following JS Methods
// Filter
Array.prototype.myFilter = function(callback){
  let result = [];
  for(let i=0; i<this.length; i++){
      if(callback(this[i], i, this)){
          result.push(this[i]);
      }
  }
  return result;
}

// ForEach
Array.prototype.myForEach = function(callback){
  for(let i=0; i<this.length; i++){
      callback(this[i], i, this);
  }
}

// Map
Array.prototype.myMap = function(callback){
  let result = [];
  for(let i=0; i<this.length; i++){
      result.push(callback(this[i], i, this));
  }
  return result;
}

// Another version
// Filter
Array.prototype.Filter = function (func) {
  let res = [];
  for (el of this) if (func(el)) res = [...res, el]; // no push method
  return res;
};
let res1 = arr.Filter((el) => el % 2 !== 0);
console.log(res1);

// ForEach
Array.prototype.ForEach = function (func) {
  for (el of this) func(el);
};
let res2;
arr.ForEach((el) => console.log(el));

// Map
Array.prototype.Map = function (func) {
  let res = [];
  for (el of this) res = [...res, func(el)]; // no push method
  return res;
};

// Ex8 - Find the Perimeter of a Rectangle
function findPerimeter(length, width){
  return 2*(length+width);
}
