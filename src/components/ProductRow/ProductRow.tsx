import { AlertDialog, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  useDeleteProductMutation,
  useGetProductQuery,
  useUpdateProductMutation
} from 'src/pages/Products/product.service'
import { RootState } from 'src/store'
import { ProductNoRating } from 'src/types/product.type'

interface Props {
  product: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }
  index: number
  startEdit: (id: number) => void
}

const initialFormData: ProductNoRating = {
  title: '',
  price: 0,
  description: '',
  image: '',
  category: ''
}

function ProductRow(props: Props) {
  const { product, index, startEdit } = props
  const [formData, setFormData] = useState<ProductNoRating>(initialFormData)
  const productId = useSelector((state: RootState) => state.product.id || 0)
  const { data } = useGetProductQuery(productId, {
    skip: !productId // Không có productId thì skip
  })
  const [updateProduct] = useUpdateProductMutation()
  const [deleteProduct] = useDeleteProductMutation()

  useEffect(() => {
    if (data) {
      setFormData(data)
    }
  }, [data])

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (productId) {
      const result = await updateProduct({
        id: productId,
        body: formData
      }).unwrap()
      console.log(result)
    }
    setFormData(initialFormData)
  }

  const handleDelete = async () => {
    if (productId) {
      const result = await deleteProduct(productId).unwrap()
      console.log(result)
    }
  }

  return (
    <tr className={index === 1 || index % 2 === 1 ? 'bg-gray-200' : ''}>
      <td className='w-1/3 text-left py-3 px-4'>{product.title}</td>
      <td className='text-left py-3 px-4'>
        <img className='w-16 h-16' src={product.image} alt='product' />
      </td>
      <td className='text-center py-3 px-4'>{product.category}</td>
      <td className='text-center py-3 px-4'>{product.price}</td>
      <td className='w-1/3 text-left py-3 px-4'>{product.description}</td>
      <td className='flex py-3 px-4'>
        <Dialog.Root>
          <Dialog.Trigger>
            <button
              type='button'
              onClick={() => startEdit(product.id)}
              className='flex items-center py-2 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
            >
              <svg
                className='mr-3'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z'></path>
                <path d='M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z'></path>
              </svg>
              Edit
            </button>
          </Dialog.Trigger>
          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Edit product</Dialog.Title>
            <Dialog.Description size='2' mb='4'>
              Edit product information
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
                    Update
                  </button>
                </Dialog.Close>
              </Flex>
            </form>
          </Dialog.Content>
        </Dialog.Root>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <button
              type='button'
              onClick={() => startEdit(product.id)}
              className='flex items-center py-2 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
            >
              <svg
                className='mr-3'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z'></path>
                <path d='M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z'></path>
              </svg>
              Delete
            </button>
          </AlertDialog.Trigger>
          <AlertDialog.Content style={{ maxWidth: 450 }}>
            <AlertDialog.Title>Delete</AlertDialog.Title>
            <AlertDialog.Description size='2'>
              Are you sure? You can't undo this action afterwards.
            </AlertDialog.Description>

            <Flex gap='3' mt='4' justify='end'>
              <AlertDialog.Cancel>
                <button
                  type='button'
                  className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2'
                >
                  Cancel
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <button
                  type='submit'
                  onClick={handleDelete}
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2'
                >
                  Delete
                </button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </td>
    </tr>
  )
}

export default ProductRow
