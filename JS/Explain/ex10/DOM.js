// HTML alone is static

// js need a way to access and see and control the HTML doc

// DOM = Document Object Model
// DOM is a programing an HTML document as tree of js objects
// Means EVERY HTML ELEMENT IS JS OBJECT
// DOM is a bridge between HTML and js
// without DOM cant access to HTML and cant change text and styles or update

// document -> work with js as browser
// document is the main father for all DOM 3

//! HTML -> 
<body>
    <h1>Hello</h1>
    <p>Welcome</p>
    <button>Click</button>
</body>

//! DOM -> document -> html -> body -> h1,p,button
// each node in this tree is -> object, has properties, has methods, can be access and modified
// Dom is a navigation and control of this tree

// first selecting element then control it
//! single element selection:
document.getElementById("title");
document.querySelector("#title"); // ->
// return by the name of the class only one element
// both return a single DOM object
// querySelector -> it uses CSS selectors
// typeOf #title -> Object 
// in js DOM -> every element is object

//! multiple element selection:
document.getElementsByClassName("item"); // ->
// return elements by the class name
document.getElementsByTagName("p"); // ->
// RETURN all element print it like an array
document.querySelectorAll(".item"); // class
// these return collections of elements not a single object this method return by the name of the class


//! HTMLCollection vs NodeList
// NodeList -> is static return by querySelectorAll, easy and safe to loop
// HTMLCollection -> live collection return by older DOM methods, automatic updates when DOM changes
const items = document.querySelectorAll(".item");
// returns a NodeList like an array

//! DOM Traversing:
// navigating between related elements
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling

const list = document.querySelector("ul");
const firstItem = list.firstElementChild;

//! Reading Content from Elements
element.textContent; // -> return raw text, fast and safe, ignore CSS -> change the content in js
element.innerText; // -> return visible text, slow, affected by CSS -> return the text inside title for example
element.innerHTML; // -> return HTML as string, powerful but risky, can include tags -> same as innerText but innerHTMl return with element/tag

//! Changing Content
element.textContent = "Updated text"; // -> This immediately updates the page

//! Styling Elements with JavaScript
// (Not Recommended)
element.style.color = "red"; // -> problems -> mixes with design, CSS rules, Hard to maintain
// js style is contrloed in styling 

// (Recommended)
// Styling with Classes: 
// classList -> working with classes styles
element.classList.add("active"); // active = class that i edit it in css i just calling him here because js DOM is controled (we controled with css in js)
element.classList.remove("hidden");
element.classList.toggle("open"); // -> change to different class
// this keeps -> logic in js, design in css

//! Creating and Removing Elements
// Creating Elements:
const heading = document.createElement("h2"); // ->
// we making a new element
heading.textContent = "New Section"; // ->
// we see it only in console.log
// This creates an element  in memory  , not on the page

// Inserting Elements:
document.body.appendChild(heading);// this way we can see the heading(h2).textContent in HTML
// appendChild -> append = احقنلي الابن الي هو هيدينج
// or
parent.insertBefore(newElement, referenceElement);

// Removing Elements:
element.remove(); // -> This completely deletes the element from the DOM
// if we want to delete element we must hold it
// it rist when the use delete it completely must add yes or no/ are you sure

element.getAttribute("href"); // the data inside the html element
element.setAttribute("href", "www.ehab.com")// set and change the info 

//! Loops and the DOM
// Loops allow us to control all of them efficiently
// Using  forEach:
// we using action here
const Items = document.querySelectorAll(".Item");
items.forEach(Item => { Item.classList.add("highlight"); }); // i want to put class named highlight
// foreach(callback func)
// Using a  for  Loop:
// if i want to change it to updated
for (let i = 0; i < items.length; i++) {
    items[i].textContent = "Updated";
}
// forEach  is preferred for readability.



//! Events and Event Listeners
// Events = actions
// How JavaScript Reacts to the User
// Why Events Exist -> for change content, read HTML, create and delete elements, styling the page
// BUT all of this happend when the page loads
// js runs once then stops

// users do not behave once they:
// click many times
// change their minds

// the browser needs to:
// detect user actions
// inform js that something happend
// allow js to react at the right moment
// THIS CALLED EVENTS

// EVENTS IS -> A SIGNAL sent by browser it can be:
// a user action click, typing, submit
// a browser action like page loads, resize
// a system action like network changes, focus changes

// JavaScript can  listen  for these events.
//! no one use vanilla js, the replacement is React
//! Here we writing Vainlla js

// eventlistenr -> take the event & func

const title = document.querySelector("#title");
const box = document.querySelector("#box");
const button = document.querySelector("#btn");
const username = document.querySelector("#username");
const output = document.querySelector("#output"); // p
const emailInput = document.querySelector("#emailinput");
const login = document.querySelector("#loginform");
// addEventListener = method -> (type = what event is happing, (Listner) func)
button.addEventListener("click", () => {
    // console.log("button clicked");
    title.style.color = "red";
});
// when i click it chagne the title color

box.addEventListener("mousehover", () => {
    // console.log("Mouse Hover");
    box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", () => {
    // console.log("Mouse out");
    box.style.backgroundColor = "blue";
});
// "input", (event) => {... 
// inide the event in log we see thier is target for input
// event.target.value = the value that i am typing 
username.addEventListener("input", (event) => {
    // he call the func when i write every letter
    // console.log(event.target.value);
    output.textContent = event.target.value;
});

emailInput.addEventListener("input", (event) => {
    // he call the func when i write every letter
    // console.log(event.target.value);
    output.textContent = event.target.value;
});
login.addEventListener("submit", (event) => {
    // event.preventDefault() disallow js to move automatic and force it to do it like how i want and allows after submit 
    event.preventDefault();
    const email = emailInput.value;
    console.log(email);

    if (email === "" && email != "@") {
        alert("failed");
        return;
    }
    alert("login successed");
});