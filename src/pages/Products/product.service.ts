import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product, ProductNoRating } from 'src/types/product.type'

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (build) => ({
    //  Generic type theo thứ tự à kiểu response trả về và arg là kiểu param truyền vào
    getProducts: build.query<Product[], number | void>({
      query: (limit = 5) => `products?limit=${limit}`, // method không có arg thì để void
      /*
      - Sử dụng providesTags ở đây, invalidatesTags ở các mutation để invalidate cache
      - Nếu có thay đổi ở các endpoint khác thì cũng sẽ invalidate cache của endpoint này
      - Ví dụ: invalidate cache của endpoint getProducts khi có thay đổi ở endpoint addProduct
      - Nó giống kiểu đồng bộ dữ liệu danh sách sản phẩm sau khi thêm sản phẩm mới
      */
      providesTags: (result) => {
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Products' as const, id })),
            { type: 'Products' as const, id: 'LIST' }
          ]
          return final
        }
        return [{ type: 'Products', id: 'LIST' }]
      }
    }),
    addProduct: build.mutation<Product, ProductNoRating>({
      query: (body) => ({
        url: 'products',
        method: 'POST',
        body
      }),
      /*
        - Sử dụng invalidatesTags ở đây
        - invalidatetags cung cấp các tag để báo hiệu cho những method nào có provideTags với tag tương ứng
        - match với nó thì sẽ bị gọi lại
        - Ví dụ: invalidate cache của endpoint getProduct khi có thay đổi ở endpoint updateProduct
      */
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    }),
    getProduct: build.query<Product, number>({
      query: (id) => `products/${id}`
    }),
    updateProduct: build.mutation<Product, { id: number; body: ProductNoRating }>({
      query: (data) => ({
        url: `products/${data.id}`,
        method: 'PUT',
        body: data.body
      }),
      invalidatesTags: (_result, _error, data) => [{ type: 'Products', id: data.id }]
    }),
    deleteProduct: build.mutation<Product, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Products', id }]
    })
  })
})

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productApi
