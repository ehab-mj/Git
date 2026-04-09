//** useEffect */
// async code work as a promise
// promise: .then ...
// async sugar = await

import { useEffect, useState } from "react";

//* side effect
// anything comes from out the component like:
// 5:35
// setTimeout, localstorage, 
// all async code = side Effect -> how to deal with it ->
// we do capture by using useEffect

//* rerender = refrech page

//* useEffect syntax -> part 1 -> callback, part 2 -> depensises array

// when we take out of the component called side effect

useEffect(
    // part 1:
    // the callback func work only once 
    // if we put empty array ([]) so it works only once
    () => {
        console.log("callback func");
    },
    // part 2:
    []
)


const [users, setUsers] = useState([]);

useEffect(() => {
    fetch(`..../users`)
        .then((res) => res.json())
        .then((data) => setUsers(data))
}, [])


// if userId change the callback func in useEffect is change
useEffect(() => {
    fetch(`..../users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUsers(data))
}, [userId])


// looping on show data
