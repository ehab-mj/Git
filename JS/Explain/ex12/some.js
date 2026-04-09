//* .some() vs .find() vs .filter()
//! Method	    What it returns     When to use
//* .some()	    true / false	    Check if exists
//* .find()	    the item itself     Get one item
//* .filter()   new array	        Remove / keep items


const exists = favs.some(
    (m) => m.idMeal === meal.idMeal
);

favs = [
    { idMeal: "1", strMeal: "Pizza" },
    { idMeal: "2", strMeal: "Burger" }
]

//* JavaScript checks:
//* Pizza.idMeal === "2" ❌
//* Burger.idMeal === "2" ✅ ← STOP HERE

//* ❌ If nothing matches
//* favs = [{ idMeal: "1" }]
//* clicked meal idMeal = "3"
//! false

//* Why.some() is PERFECT for favorites
// Because you only need to know:
// ❓ “Is this meal already in favorites ?”
// You don’t need the item itself — just yes or no.

//* .some() = “Is there at least ONE ?”