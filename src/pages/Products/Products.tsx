import ProductRow from 'src/components/ProductRow'
import { useAddProductMutation, useGetProductsQuery } from './product.service'
import { Badge, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import Skeleton from 'src/components/Skeleton'
import { ProductNoRating } from 'src/types/product.type'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startEditProduct } from './product.slice'

const initialFormData: ProductNoRating = {
  title: '',
  price: 0,
  description: '',
  image: '',
  category: ''
}

function Products() {
  const [limit, setLimit] = useState(5)
  const { data, isFetching } = useGetProductsQuery(limit)
  console.log(data)

  const [formData, setFormData] = useState<ProductNoRating>(initialFormData)
  const [addProduct] = useAddProductMutation()
  const dispatch = useDispatch()

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await addProduct(formData).unwrap()
    console.log(result)
    setFormData(initialFormData)
  }

  const startEdit = (id: number) => {
    dispatch(startEditProduct(id))
  }

  return (
    <div className='w-full overflow-x-hidden border-t flex flex-col'>
      <main className='w-full flex-grow p-6'>
        <h1 className='text-3xl text-black pb-6'>Products</h1>
        <div className='w-full mt-12'>
          <p className='text-xl pb-3 flex items-center'>
            <svg
              className='mr-3'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zM4.118 12 7 6.236 9.882 12 7 17.764 4.118 12zm12.264 7H8.618l3-6h7.764l-3 6z'></path>
            </svg>
            All Products
          </p>
          <Dialog.Root>
            <Dialog.Trigger>
              <button className='bg-white cta-btn font-semibold py-2 px-4 my-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center'>
                <svg
                  className='mr-3'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentcolor'
                >
                  <path d='M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z'></path>
                </svg>
                Add new product
              </button>
            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 450 }}>
              <Dialog.Title>Add new product</Dialog.Title>
              <Dialog.Description size='2' mb='4'>
                Add a new product to your store.
              </Dialog.Description>
              <form onSubmit={handleSubmit}>
                <Flex direction='column' gap='3'>
                  <label htmlFor='title'>
                    <Text as='div' size='2' mb='1' weight='bold'>
                      title
                    </Text>
                    <TextField.Input
                      name='title'
                      value={formData.title}
                      onChange={handleChangeValue}
                      type='text'
                      placeholder='title'
                    />
                  </label>
                  <label htmlFor='price'>
                    <Text as='div' size='2' mb='1' weight='bold'>
                      price
                    </Text>
                    <TextField.Input
                      name='price'
                      value={formData.price}
                      onChange={handleChangeValue}
                      type='number'
                      placeholder='price'
                    />
                  </label>
                  <label htmlFor='description'>
                    <Text as='div' size='2' mb='1' weight='bold'>
                      description
                    </Text>
                    <TextField.Input
                      name='description'
                      value={formData.description}
                      onChange={handleChangeValue}
                      type='text'
                      placeholder='description'
                    />
                  </label>
                  <label htmlFor='image'>
                    <Text as='div' size='2' mb='1' weight='bold'>
                      image
                    </Text>
                    <TextField.Input
                      name='image'
                      value={formData.image}
                      onChange={handleChangeValue}
                      type='text'
                      placeholder='image'
                    />
                  </label>
                  <label htmlFor='category'>
                    <Text as='div' size='2' mb='1' weight='bold'>
                      category
                    </Text>
                    <TextField.Input
                      name='category'
                      value={formData.category}
                      onChange={handleChangeValue}
                      type='text'
                      placeholder='category'
                    />
                  </label>
                </Flex>
                <Flex gap='3' mt='4' justify='end'>
                  <Dialog.Close>
                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2'
                    >
                      Cancel
                    </button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <button
                      type='submit'
                      className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'
                    >
                      Save
                    </button>
                  </Dialog.Close>
                </Flex>
              </form>
            </Dialog.Content>
          </Dialog.Root>
          <div className='bg-white rounded-lg overflow-auto'>
            <table className='min-w-full bg-white'>
              <thead className='bg-gray-800 text-white'>
                <tr>
                  <th className='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm'>Title</th>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>Image</th>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>Category</th>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>Price</th>
                  <th className='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm'>Description</th>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-gray-700'>
                {isFetching && <Skeleton col={6} />}
                {!isFetching &&
                  data?.map((product, index) => (
                    <ProductRow key={product.id} index={index} product={product} startEdit={startEdit} />
                  ))}
              </tbody>
            </table>
          </div>
          {!isFetching && (
            <Flex className='justify-center mt-5' gap='2'>
              <Badge
                className={limit === 5 ? 'cursor-pointer hidden' : 'cursor-pointer'}
                color='orange'
                onClick={() => setLimit(limit - 5)}
              >
                See less
              </Badge>
              <Badge
                className={limit > (data?.length as number) ? 'cursor-pointer hidden' : 'cursor-pointer'}
                color='blue'
                onClick={() => setLimit(limit + 5)}
              >
                See more
              </Badge>
            </Flex>
          )}
        </div>
      </main>
    </div>
  )
}

export default Products
