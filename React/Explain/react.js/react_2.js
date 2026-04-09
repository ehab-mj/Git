// Data -> props
// 5:30
// prpos -> coming from component parent to child
//! State -> الحاله
//! State = stored data, program remeber in this moment, We have data it may changed in anytime
//! State = memory

let score = 0;
// leter
score = 10;
// later
score = 20;
// state changing over time
// state change when we program is running

// Example: like coffee = hot
// after couple of mins = cold
// door = open, close

// program needs storage to remember
// memory = state

//! when does a variable become state
// State controls behavior
// in js was let flag = true;
// it can change over time


// Not state:
// let total = price * quantity;
// the program there is no point of this change state take only for memory

// State controls behavior (core idea) 
let hasKey = false;
function openDoor() { if (hasKey) { console.log("Door  opened"); } else { console.log("Door  locked"); } }
// door locked

// change the state:
// hasKey = true;

// Programs vs web applications
//  Traditional programs:
// ● Run
// ● Finish
// ● Exit  Web

// applications:
// ● Stay alive
// ● Respond to users
// ● Change visually

//! What is UI state
// state controls what the user sees on the page (UI)
// the page shows data
// user interface =
// UI = انعكاس للحاله

// formula
// any UI = function(data)
// in React:
//! data = props + state
//! UI = take data from function , state

//! the problem
function example() {
    let x = 0;
    x++;
    return x;
}
// return 1

// the function does not have memory

// we add state
// component needs memory

//! the Solution: Hooks
// function Hooks
// Hooks: مثل صيد السمك
// he connect react system
// we get:
// - state
// - lifecycle
// - Context
// - Side effects
// Hooks connected with react to help
//! every Hook starts with use

//! useEffect -> الاحداث الجانبيه الي تحصل في الدوم تسيطر على الحاله التي تحصل
// controls of the side effects

//! useState  → use React’s state system

// This allows React to:
//  ●   Track hooks
//  ●   Enforce rules
//  ●   Keep state stable

//! The old methods:

// Mounting
//! componentDidMount -> its Born now

// Updating
//! componentDidUpdate
// every time we change we start this component
// - new props
// - setState()
// -

//! componentWillUnMount
// clear and delete component

// 6:05
// we do rerender we show the user the changes/ updated values

// New Methods
//! Hooks

//!** - useState: **
// as we know:
// State is a memory
// func forget
// Comp need a memory

// what react give us:
// She give us a useState ->
// a hook that gives a memory to func and Comp

//* When a Comp use useState:
// React creates -> memory
// React keeps it between renders
// React watches it for changes
// When it changes → React re-renders the componen

//* You never change state directly.  You  ask React  to update it.
//! why?:
// Because React needs to:
// do rendering
// Batch updates
// Optimize DOM changes
// So state updates are  requests  , not assignments

//* useState Syntax:
const [count, setCount] = useState(0);
// ● count  → current situation
// ● setCount  → request React to change the situation
// ● 0  → initial state

//! The most important rule in React
//! Wrong: count++;
//* Correct: setCount(count  +  1);
//! why?:
//  Because:
// ● React must be notified
// ● React controls rendering

//* What happens when state changes ?
// 1.   State changes
// 2.   React detects the change
// 3.   Component function runs again
// 4.   New UI is calculated
// 5.   DOM updates automatically