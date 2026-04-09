// Redux using when the app is getting bigger

// async = promise -> it take time
// sync = عمليه حسابيه -> pure

//* callback hell -> fixed it with -> Promise
//* promise fixed chaining with -> async await

//! Redux cant do async function (only pure function cant handle async)

// how to fix it?
//* Middlewear -> function it happend in middle
// or func outside the Reducer

// creating thunk function
// thunk function -> do api req

//! 7:25 ++ 7:50


//* in folder feature -> productthunk.js -> (we put hear a middlewear)

import { createAsyncThunk } from "@reduxjs/toolkit"

// take type prefecs -> slice name/ action will happen
export const fetchProducts = createAsyncThunk(
    //* pending, rejected, fulfilled 
    // type prefecs:
    "products/fetchProducts",
    // async function -> will do fetch from api
    // he take payload/ tool = reading errors
    // payload = id, name...
    async (_, thunkApi) => {
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            if (!res, ok) {
                return thunkApi.rejectWithValue("server Error")
            }
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
)


// post method 8:20..
// method: "POST", headers: {"Content-Type": "applecation/json"}
// body: JSON.stringify(newProduct)

//* in slice folder under reducer
extraReducers: (builder) => {
    // he goes... (sending..) = pending
    builder
        .addCase(fetchProducts.pending, (state) => {
            // if i pending =
            state.isLoading = true;
            state.error = null
        })
        // next step fullfilled before reject
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        // reject
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "error";
        })
        // we do it the same here for post method
        .addCase(addProducts.pending, (state, action) => {
            state.isLoading = true;
            state.error = action.state.error = null
        })
        .addCase(addProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = [action.payload, ...state.products];
        })
        .addCase(addProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "error";
        })
    // 8:30
}
// extraReducers: (builder) = action come form outside the reducer

// thunk = helper function signal, showing api..

//* Next step we do action to happend we build it in product.js/ folder.js

// we want to acces to 3 things we build it in
// we do dispatch to -> function
const { products, isLoading, error } = useSelector((state) => {
    // here we do dispatch to function called fetchProducts
    console.log(state);
    return state.products
});

const dispatch = useDispatch();
function handleLoad() {
    dispatch(fetchProducts())
}
// post 
const newProduct = {

}

function handleAddProducts() {
    dispatch(addProducts())
}
