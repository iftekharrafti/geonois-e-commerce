import axios from '../../utils/axios.config'
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    products: [],
    filterProducts: [],
    cart: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchProducts = createAsyncThunk('productsSlice/fetchProduct', async () =>{
    const data = await axios.get(`/products`)
    return data.data;
})

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            state.cart.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) =>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchProducts.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.products = action.payload
            state.filterProducts = action.payload
            state.isError = false
        })
        .addCase(fetchProducts.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
    }
})

export const {addToCart} = productsSlice.actions;

export default productsSlice.reducer;