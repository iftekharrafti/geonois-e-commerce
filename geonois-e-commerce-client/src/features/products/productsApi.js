import apiSlice from "../../api/apiSlice";


const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductById: builder.query({
            query: (id) => `/productDetails/${id}`
        })
    })
})

export const {useGetProductByIdQuery} = productsApi