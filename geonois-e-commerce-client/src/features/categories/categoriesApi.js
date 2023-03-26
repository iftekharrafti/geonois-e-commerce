import apiSlice from "../../api/apiSlice";


const categoriesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => `/categories`
        })
    })
})

export const {useGetCategoryQuery} = categoriesApi;