const binaryArrayToNumber = arr => {
    return arr.reduce((acc, bit) => acc * 2 + bit, 0);
};

// كيف يعمل؟
// [1, 0, 1, 1]

// 0 * 2 + 1 = 1
// 1 * 2 + 0 = 2
// 2 * 2 + 1 = 5
// 5 * 2 + 1 = 11

// OR

// join(''), 2

const BinaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};
console.log(BinaryArrayToNumber([0, 0, 0, 1]));

// [1, 0, 0, 1].join('')
// "1001"
// parseInt("1001", 2)
// 9
// النتيجة النهائية
// binaryArrayToNumber([1, 0, 1, 1]);
// 11


// 🧠 الخلاصة
// join() → يحول array إلى string
// parseInt( , 2) → يحول Binary إلى Decimal
// reduce() → حل منطقي بدون دوال جاهزة