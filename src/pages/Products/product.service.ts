import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product, ProductNoRating } from 'src/types/product.type'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (build) => ({
    //  Generic type theo thứ tự à kiểu response trả về và arg là kiểu param truyền vào
    getProducts: build.query<Product[], void>({
      query: () => 'products' // method không có arg thì để void
      /*
      - Sử dụng providesTags ở đây, invalidatesTags ở các mutation để invalidate cache
      - Nếu có thay đổi ở các endpoint khác thì cũng sẽ invalidate cache của endpoint này
      - Ví dụ: invalidate cache của endpoint getProducts khi có thay đổi ở endpoint addProduct
      - Nó giống kiểu đồng bộ dữ liệu danh sách sản phẩm sau khi thêm sản phẩm mới
      */
    }),
    addProduct: build.mutation<Product, ProductNoRating>({
      query: (body) => ({
        url: 'products',
        method: 'POST',
        body
      })
    }),
    getProduct: build.query<Product, number>({
      query: (id) => `products/${id}`
      /*
        - Sử dụng invalidatesTags ở đây
      */
    }),
    updateProduct: build.mutation<Product, { id: number; body: ProductNoRating }>({
      query: (data) => ({
        url: `products/${data.id}`,
        method: 'PUT',
        body: data.body
      })
    })
  })
})

export const { useGetProductsQuery, useAddProductMutation, useGetProductQuery, useUpdateProductMutation } = productApi
