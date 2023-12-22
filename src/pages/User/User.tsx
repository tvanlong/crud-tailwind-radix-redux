function User() {
  return (
    <div className='w-full overflow-x-hidden border-t flex flex-col'>
      <main className='w-full flex-grow p-6'>
        <h1 className='text-3xl text-black pb-6'>User</h1>
        <div className='w-full mt-12'>
          <p className='text-xl pb-3 flex items-center'>
            <svg
              className='mr-3'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentcolor'
            >
              <path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'></path>
            </svg>
            All User
          </p>
          <div className='bg-white rounded-lg overflow-auto'>
            <table className='min-w-full bg-white'>
              <thead className='bg-gray-800 text-white'>
                <tr>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>ID</th>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>Username</th>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>Email</th>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>Phone</th>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>Address</th>
                  <th className='text-center py-3 px-4 uppercase font-semibold text-sm'>Action</th>
                </tr>
              </thead>
              <tbody className='text-gray-700'>
                <tr>
                  <td className='text-center py-3 px-4'>1</td>
                  <td className='text-center py-3 px-4'>Johnd</td>
                  <td className='text-center py-3 px-4'>john@gmail.com</td>
                  <td className='text-center py-3 px-4'>1-570-236-7033</td>
                  <td className='text-center py-3 px-4'>7682, new road, kilcoole</td>
                  <td className='flex justify-center py-3 px-4'>
                    <button
                      type='button'
                      className='flex items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
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
                    <button
                      type='button'
                      className='flex items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default User
