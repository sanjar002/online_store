import { createSlice, createAsyncThunk} from  "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product/fetchProducts",
async () => {
    const req = await fetch("https://fakestoreapi.com/products");
    const res= await req.json();
    console.log("res: ", res);
    return res;
  }
);

const initState = {
    products: [],
    status: "",
    error: "",
};

const productSlice= createSlice({
    name: "product",
    initialState: initState,
    reducers: {},                  //синхронный коддор
    extraReducers: {
        [fetchProducts.pending]: (state, action) =>{
            state.status ="pending";
            state.error = "";
        },
        [fetchProducts.fulfilled]: (state, action) =>{
            console.log(action,'dddd');
            state.status = "success";
            state.products = action.payload;       //[20]-данный келет
        },
        [fetchProducts.rejected]: (state, action) =>{
            state.error = "Error";
        },
    },        //асинхронный коддор
});
console.log(productSlice);


export default productSlice.reducer;