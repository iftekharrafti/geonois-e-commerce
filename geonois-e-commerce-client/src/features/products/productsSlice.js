import axios from '../../utils/axios.config'
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    products: [],
    filterProducts: [],
    cart: [],
    bookmark: [],
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
            const foundProduct = state.cart.find(product => product._id === action.payload._id)
            const quantity = action.payload.quantity;

            if(foundProduct && foundProduct.stock > foundProduct.quantity){
                foundProduct.quantity += 1;
            }
            if(!foundProduct && quantity){
                state.cart.push(action.payload)
            }
            if(!foundProduct && !quantity){
                const newProduct = {...action.payload, quantity: 1}
                state.cart.push(newProduct)
            }
        },
        removeFromCart: (state, action) =>{
            state.cart = state.cart.filter(product => product._id !== action.payload)
        },
        addToBookmark: (state, action) =>{
            state.bookmark.push(action.payload)
        },
        removeFromBookmark: (state, action) =>{
            state.bookmark = state.bookmark.filter(product => product._id !== action.payload)
        },
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

export const {addToCart, removeFromCart, addToBookmark, removeFromBookmark} = productsSlice.actions;

export default productsSlice.reducer;