// dynamic -> accept data
// we create only one card and will do change the data

//! Component -> the main for react
// she does one thing
// a piece of UI -> reuse code

// DOM -> TREE -> document -> HTML..
// HTML, CSS, JS, DOM = VANILLA JS

function App() {
    return
    // HTLM = JSX as JS
}

// 5:20
//virtual DOM he is aclone of without doing rerender

// 5:30 - 5:40 important
//!React -> is library of js not framework
// i can install many library without any شروط
// make build user interface called component that i can reuse it
// before when we want to edit we write document... DRY
//! virtual DOM: take a copy then edit it only the (editing) copy i want to edit

//! React is single page application

// framework ->

// one page -> every time i call to Render element

// 5:40

//! Node.js js run time enviroment
// work with react and package
// npm: big package

//! Vite: tool do converation (setup, package, servers) to write react to do run to code
// $npm create vite@lastet
// tool we can use with any framework and any library
// npm i: install all package/library that i need it to do run app

// files:
// public: static files put in it images, logo, icons... (react not affect/cant change it only static like logo)
// src: code we write
// assest: same as public (but if i want to change)
// App.jsx: very important
//! index: div = the all pages we doing root -> is the return -> main -> App.jsx
// the render do inside this div
// in DOM -> document -> HTML -> div = we are here
// main.jsx -> createRoot(document.getelementbyid('root).render) -> she doing render and show it to page
// StictMode -> 6:30-+
// all the code in App

// package.json make the react start working
// in package.json ->
// type: module = import/export
// lint -> code quality and if then error show it to me, tells me if there mistakes, he do setup to make more cleaner
// dependencies = react: last version,
// devDependencies = what i need in upgrade
// package.lock.json = he chacks the dependencies...
// vite.config.js -> we write react code we change or adding in config (setting)
// .gitigone = ignore log, node_modules to github

//!JSX = return element 1
// <> </> = fragment
// to connect css we write className
// jsx -> using map not for loop

//! rfc -> short write component

// App.css -> style only just for App.jsx
// index.css -> global css font size....
// to call from js in html by {}

// writing if in html/jsx 
let isRender = false;
<div>{isRender ? <Home /> : <ContactUs />}</div>,

    //! Props = proprites 
    // props is obj
    // father and sons
    // if it was number{} string()
    <ProductCard name="Nike" price={120} />

// father 
function App() {
    return (
        <ProductCard name="Nike Shoe" price={120} />
    );
}

// 7:50+
// in App
{/* <ProductCard name="Nike Shoe" price={120} />  */ } // -> it the same as this
// props = {
//     name: "Nike Shoe",
//     price: 120
// }
// we write in Product.js
function ProductCard(props) {
    // ProductCard(props) -> props is obj
    return (
        <div>
            <h3>{props.name}</h3>
            <p>${props.price}</p>
        </div>
    );
}
