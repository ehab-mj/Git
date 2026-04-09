// 5:00 ... 5:20+

//* redux -> state managment tool


// she reslove state

//* How Redux work:
// redux do a some store -> saving state inside it -> But in global place that can any component take state (but it not simple)
// this global store is responsiv for any state we need and for logical funtion it happen for this state

// when the componend needs a store it called subscribe

// Step 1:
// create a global store
// we have state in store i can access to state -> called subscribe

// user did a post with delete button -> this event called action
// this action we send it to store -> type action = delete
// in store do a logic -> change state -> see component that did subscribe to her and change

//* redux === store
// payload -> any information of store -> he want to know the id

// Dispatch -> take action + current state -> send it to store

//! 5:30

//! npm install @reduxjs/toolkit react-redux

//* Example:
// UI = 0$ -> event handler = Dispatch -> send it to -> Store = what happend in store is:
// state: 0$ -> send it to Reducer
// Reducer -> do the math thing and give a new state to UI
// UI = 10$

//* Redux -> JS library and global state managment
// when i need it i do import
// she work with any layer not just react
//* Redux Toolkit more powerful and simple

//* in store comp:
//! 5:57

//* in main.jsx
<Provider store={store}>
    <App />
</Provider>

//@-- 1. folder -> app -> store =
export const store = configureStore({
    reducer: {
        calc: calcReducer
    }
})
/////

//@-- 2. main.jsx = 

//* Redux hooks: read state from store
useSelector((state) => {
    // console.log(state);
})

// resultState from store comp
const resultState = useSelector((state) => {
    return state.calc.result
})
console.log(resultState);


// action hook
// payload حموله
// this action handle the reducer
const dispatch = useDapatch()

function handlesumclick() {
    // we send it as object
    // we putiing the action we puted in reducer / payload
    dispatch(sum({
        // type: payload
        firstNumberInput: firstNumberInput,
        secondNumberInput: secondNumberInput,
    }))
}
// we send it now to sum in reducer

//-- 3. feauture -> file.js =
//* Slice Comp
// initialstate = obj
const initialstate = {
    results: null,
};

export const calcSlice = createSlice({
    name: "calc",
    initialstate,
    reducers: {
        //* actions
        // sum - name of the action
        sum: (currentState, action) => {
            console.log("calling the sum action reducer");
            console.log(currentState);
            console.log(action);
            // function
            const add = Number(action.payload.firstNumberInput) + Number(action.payload.secondNumberInput)
            console.log(add);
        }
    }
})
// now we need to print it in html


export const { sum } = calcSlice.actions;
export default calcSlice.reducer;

//! 6:00 -+