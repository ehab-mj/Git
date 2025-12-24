// Ex1.1 - Yes or No
const boolToWord = bool => bool ? "Yes" : "No";
boolToWord()
console.log(boolToWord());

// Ex2.1 - Sum of lowest numbers
const sums = [2, 1, 7, 5, 10, 20];
const Result = sums.filter(sum => sum < 5)
    .sort((a, b) => a - b)  // sort numbers from smallest to biggest
// return arr[0] + arr[1];     // sum the first two
console.log(Result);

///////////////////////////////////////////////

// Ex2.2 - One and Zero - Binary
// مصفوفة تحتوي فقط على 0 و 1
function stringArr(arr) { // دالة تستقبل مصفوفة اسمها arr
    return parseInt(arr.join(''), 2) // تجمع عناصر المصفوفة في نص واحد
    // النتيجة: [1, 0, 1, 0] → "1010"
    // parseInt(value, base)
    // parseInt تحول نص إلى رقم
    // المعامل الثاني 2 = النظام الثنائي (Binary)
    // بدون 2، JavaScript ستفهم الرقم كنظام عشري
    // التحويل من Binary إلى Decimal: -> parseInt("1010", 2) → 10

    // الحساب يدويًا: 
    //  1×2³ + 0×2² + 1×2¹ + 0×2⁰
    // = 8 + 0 + 2 + 0
    // = 10

    //  [1, 0, 1, 1]
    // 0 * 2 + 1 = 1
    // 1 * 2 + 0 = 2
    // 2 * 2 + 1 = 5
    // 5 * 2 + 1 = 11

    // return parseInt(arr.join(''), 2) -> يرجع الرقم العشري الناتج

    // arr.join('') -> [1, 0, 1, 1] → "1011" -> parseInt("1011", 2) -> parseInt("1011", 2) → 11 
    // parseInt = Convert binary string → integer : تحويل سلسلة ثنائية إلى عدد صحيح
    // join('') -> from array to string
};
console.log(stringArr([1, 0, 1, 0]));


//! Ex2.3 - Find the Next Perfect Square

// Ex2.4 - Unique
let Uniq = [1, 1, 1, 2, 1, 1];
function findUniqNum() {
    return Uniq.find(n => Uniq.indexOf(n) === Uniq.lastIndexOf(n));
    // find -> تمر على عناصر المصفوفة واحد واحد -> return only 1 when she find it
    // n -> n هو العنصر الحالي في كل دورة
    // ليس كلمة خاصة، مجرد اسم متغير

    // indexOf(n) -> ترجع أول مكان يظهر فيه n في المصفوفة
    // مثال: -> [1,1,1,2,1]
    // indexOf(2) → 3 -> number 2 he in index 3

    // lastIndexOf(n) -> ترجع آخر مكان يظهر فيه n في المصفوفة
    // مثال: -> [1,1,1,2,1]
    // indexOf(2) → 3 -> number 2 he in index 3

    // arr.indexOf(n) === arr.lastIndexOf(n) ->
    // إذا كان أول ظهور = آخر ظهور
    // إذن الرقم ظهر مرة واحدة فقط
    // وهذا هو الرقم المختلف (Unique)

    // findUniq([1, 1, 1, 2, 1, 1])
    // n	indexOf(n)	lastIndexOf(n)	النتيجة
    // 1	    0	         5	         ❌
    // 1	    0	         5	         ❌
    // 1	    0	         5	         ❌
    // 2	    3	         3	         ✅
}
console.log(findUniqNum());

// Ex2.5 - Summation
let y = 8;
function summation() {
    let sum = 0; // سنجمع فيه الأرقام
    // تبدأ من 1
    // تستمر حتى y
    for (let i = 1; i <= y; i++) {
        sum += i; // الجمع
    }
    // summation(8) -> (summation(y))
    // sum = 0
    // i = 1 → sum = 1
    // i = 2 → sum = 3
    // i = 3 → sum = 6
    // i = 4 → sum = 10
    // i = 5 → sum = 15
    // i = 6 → sum = 21
    // i = 7 → sum = 28
    // i = 8 → sum = 36
    return sum; // sum = 36
}
console.log(summation()); // 36

//! Ex2.6 - Years and Centuries

//! Ex2.7 - Basic Math

// operation → العملية الحسابية (+ - * /)
// eval -> تأخذ نص (String) وتنفّذه كأنه كود JavaScript
function basicOp(value1, operation, value2) {
    return eval(value1 + operation + value2)
    // eval("4+7")
}
console.log(basicOp(4, '*', 7));
///////////////////////////////////////////////
//~~ Math In Story ~~// 

// Ex3.1 - Growth Of population
// 🧠 فكرة التمرين
// p0 → عدد السكان في البداية
// percent → نسبة النمو السنوية(%)
// aug → عدد الأشخاص الجدد كل سنة
// p → عدد السكان المطلوب الوصول إليه
// ❓ المطلوب:
// 👉 كم سنة نحتاج حتى يصل عدد السكان إلى p أو أكثر؟
// ✨ مثال
// p0 = 1000
// percent = 2
// aug = 50
// p = 1200

const EvYear = (pop_0, percent, aug, pep) => {
    let years = 0;

    // طالما عدد السكان الحالي أقل من المطلوب → نكمل الحساب.
    while (pop_0 < pep) {
        pop_0 += pop_0 * percent / 100 + aug; // حساب النمو السنوي
        years++;// زيادة سنة
    }

    return years;
};
EvYear(1500, 5, 100, 5000);


// Ex3.2 - People on the Bus
const PepinbusStop = busStop => {
    return busStop.reduce((acc, [In, Out]) =>
        acc + In - Out, 0)
};
// ما هي reduce؟
// تمرّ على كل عناصر المصفوفة
// تجمع نتيجة نهائية واحدة(عدد الأشخاص في الباص)
// acc = يمثّل عدد الأشخاص الحاليين في الباص
// يبدأ بـ 0 (الباص فارغ في البداية)
// [in,out] -> Destructuring
console.log(PepinbusStop([[10, 0], [3, 5], [5, 8]]));
// | المحطة | acc(people) | in | out | النتيجة |
// | ------- ------      | -- | --- | ------- |
// | start   | 0     +   | -  | -      | 0 |
// | 1      | 0      +  | 10  - |  0   =  | 10 |
// | 2     | 10      +  | 3   - |  5   = | 8 |
// | 3     | 8      +   | 5   - |  8   =   | 5 |


///////////////////////////////////////////////

//~~ Advanced Math ~~//

// Ex4.1 - Fibonacci -
// 🧠 ما هي متتالية فيبوناتشي؟
// هي سلسلة أرقام:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// 📌 كل رقم = مجموع الرقمين اللي قبله
// 🧩 المطلوب(غالبًا)
// إعطاء رقم n
// 👉 إرجاع الرقم رقم n في متتالية Fibonacci
// ✨ مثال
// fib(0) → 0
// fib(1) → 1
// fib(6) → 8

const fib = n => {
    let arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    console.log(arr);

    return arr[n];
}
console.log(fib(10));




// Ex4.2 - Tribonacci -
// 🧠 ما هي Tribonacci؟
// تشبه Fibonacci لكن:
// 📌 كل رقم = مجموع 3 أرقام قبله بدل رقمين.
// 🧩 المطلوب في التمرين
// عندك توقيع(signature) فيه 3 أرقام
// ورقم n → طول السلسلة المطلوب
// ترجع مصفوفة Tribonacci بطول n
// ✨ مثال
// signature = [1, 1, 1]
// n = 10
// →[1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
signature = [1, 1, 1]
// signature = [1, 2, 3]
let n = 10;

const Tribonacci = () => {
    let tri = signature;
    for (let i = 3; i < n; i++) {
        tri[i] = tri[i - 1] + tri[i - 2] + tri[i - 3];
        // tri[3] = tri[2] + tri[1] + tri[0]
        //        = 1 + 1 + 1
        //        = 3
        // [1, 1, 1, 3]

        // عند i = 4
        // tri[4] = 3 + 1 + 1 = 5
        // عند i = 5
        // tri[5] = 5 + 3 + 1 = 9
    }
    return tri.slice(0, n);
}
Tribonacci();
console.log(Tribonacci());

///////////////////////////////////////////////

//~~ Basic Iteration Logic ~~//

// Ex5.1 - trimming string
let str = ["ehab", "bahaa", "Rayan", "Reem", "Losee"]
const Remove = () => {
    return str.slice(1, 5)
}
Remove()
console.log(Remove());

// Ex5.2 - String Repeat
let strRepeat = "Lo"
const Repeat = () => {
    return strRepeat.repeat(10, "Lo")
}
Repeat()
console.log(Repeat());

// Ex5.3 - To Camel Case
let Str = "winter is coming";
const ToCamelCase = () => {
    let words = Str.split(/-_/)

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}
ToCamelCase();
console.log(ToCamelCase());

//! Ex5.4 - To Weird Case

// Ex5.5 - Abbreviate two words
let user = "ehab magdoub";
function AbbrevName() {
    return user.split(' ').map(x => x[0].toUpperCase()).join('.');
    // split -> تقسم النص إلى كلمتين: -> "Sam Harris" → ["Sam", "Harris"]
    // map(x => x[0].toUpperCase()) -> نمشي على كل كلمة في المصفوفة:
    // x تمثل كلمة واحدة -> 
    // أول مرة: "ehab"
    // ثاني مرة: "magdoub"
    // x[0] -> نأخذ أول حرف: -> "ehab"[0] // "e", "magdoub"[0] // "m"
    // نحوّل الحرف إلى كبير: "e".toUpperCase() // "E"
    // 📌 النتيجة بعد map: ["E", "M"]
    // نجمع الأحرف مع نقطة بينهما: ["E", "M"].join('.') // "E.M"

    // 🧠 تفكيك الكود كأنه مراحل
    // name = "ehab magdoub"
    // step1 = name.split(' ')       // ["ehab", "magdoub"]
    // step2 = step1.map(x => x[0].toUpperCase()) // ["E", "M"]
    // step3 = step2.join('.')       // "E.M"
}
AbbrevName();
console.log(AbbrevName());


// Ex5.6 - Mask
function maskify(visa) {
    // return visa.length <= 4 ? visa : '#'.repeat(visa.length, -4) + visa.slice(-4);
    if (visa.length <= 4) {
        return visa;
    } else {
        return '#'.repeat(visa.length, -4) + visa.slice(-4);
        // تكرر # بعدد الأحرف المخفية
        // visa.slice(-4) -> تأخذ آخر 4 أحرف فقط
    }
}
console.log(maskify("4556364607935616"));

// Ex5.7 - shortest words 
let line = "It's not about how much we lost. It's about how much we have left";

const FindShortWord = () => {
    return Math.min(...line.split(' ').map(word => word.length));
    // .map(word => word.length) -> نحوّل كل كلمة إلى طولها
    // Math.min(...array) -> نأخذ أصغر قيمة من المصفوفة
    // 2 
}
FindShortWord()
console.log(FindShortWord());
// const FindShortWord = s =>
//     Math.min(...s.split(' ').map(word => word.length));



// Ex5.8 - shortest words version 2
const FindLongWord = () => {
    return Math.max(...line.split(' ').map(word => word.length));
}
FindLongWord()
console.log(FindLongWord());


///////////////////////////////////////////////


// Ex6.1 - Mumbling

let s = "abcdefg";
function Accum() {
    return s.split('') // split('') تقسم النص إلى أحرف
        // النتيجة ["a", "b", "c", "d"]
        .map((a, z) => a.toUpperCase() + a.toLowerCase().repeat(z))
        // map -> map تمرّ على كل عنصر في المصفوفة
        // array.map((element, index) => {
        // });
        // .map((c, d) -> هي أسماء متغيّرات فقط ->
        // (تقدر تسميها أي اسم تحبه)
        // الاسم	ماذا يمثل
        // a	العنصر الحالي(الحرف)
        // z	رقم العنصر(index)

        // c → الحرف الحالي
        // d → رقم الحرف (index) ويبدأ من 0
        // لحرف	    a     z
        // الأول	"a"	   0
        // الثاني	"b"    1
        // الثالث	"c"	   2
        // الرابع	"d"	   3

        // a.toUpperCase() -> تحويل الحرف الأول إلى كبير -> "a" → "A"
        // a.toLowerCase().repeat(z) -> تكرار الحرف الصغير
        // repeat(d) يكرّر الحرف حسب رقم الـ index
        //  a	z	النتيجة
        // "a"	0	""(ولا مرة)
        // "b"	1	"b"
        // "c"	2	"cc"
        // "d"	3	"ddd"

        // دمج الكبير مع الصغير
        // c.toUpperCase() + c.toLowerCase().repeat(d)
        // النتيجة لكل حرف:
        // الحرف	الناتج
        // a	"A"
        // b	"Bb"
        // c	"Ccc"
        // d	"Dddd"

        // الربط باستخدام _ -> .join('_');

        .join('_');
};
Accum();
console.log(Accum());


//! Ex6.2 - Counting Duplicates

//! Ex6.3 - organize strings
// 🧠 الفكرة ببساطة
// اجمع النصين
// احذف التكرار
// رتّب الحروف
// حوّلها إلى نص

// Set = لإزالة التكرار + كل حرف يظهر مرة واحدة فقط
// .sort() -> ترتيب الحروف أبجديًا
// join() -> تحويل المصفوفة إلى String
let s1 = "asdfsldgfkdfdz";
let s2 = "kkmvjldfdkfppp";

const longest = () => {
    let concat = s1 + s2;
    console.log(concat);
    return [...new Set(s1 + s2)].sort().join('');
}
console.log(longest());


//! Ex6.4 - isogram
// إذا عدد الحروف المختلفة = عدد الحروف الكلي
// → الكلمة Isogram
// gnore letter case.
// islsogram("Dermatoglyphics") == true
// islsogram("aba") == false
// islsogram("moOse") == false // -- ignore letter case

let Isogram = "abcCfg";

const isIsogram = () => {
    return new Set(Isogram.toLowerCase()).size === Isogram.length;
}
console.log(isIsogram());
// str.toLowerCase() -> ignore Capital case make it Lower ->
// "moOse" → "moose"
// new Set("aba") → { 'a', 'b' }
// new Set(...).size === str.length -> مقارنة الطول
// size → عدد الحروف المختلفة
// length → عدد الحروف الأصلية
// إذا تساووا → لا يوجد تكرار → Isogram ✅
// إذا اختلفوا → يوجد تكرار ❌
///////////////////////////////////////////////

//~~ Implement Functionality ~~//

//! Ex7 - Implement The Following JS Methods
// 🧠 كيف تفهمها بسهولة؟
// forEach → نفّذ
// map → حوّل
// filter → اختَر


// Ex8 - Find the Perimeter of a Rectangle
// 🧩 المطلوب
// إنشاء دالة:
// تستقبل الطول(length) و العرض(width)
// ترجع محيط المستطيل
const PerSize = (length, width) => {
    return 2 * (length + width);
}
console.log(PerSize(100, 20));
