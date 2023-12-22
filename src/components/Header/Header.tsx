import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutAccount } from 'src/pages/Login/auth.slice'

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutAccount())
  }

  return (
    <>
      {/* Desktop header */}
      <header className='w-full items-center bg-white py-2 px-6 hidden sm:flex'>
        <div className='w-1/2'></div>
        <div className='relative w-1/2 flex justify-end'>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className='realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none'
          >
            <img src='https://source.unsplash.com/uJ8LNVCBjFQ/400x400' alt='Profile' />
          </button>
          {isDropdownOpen && (
            <>
              <button
                onClick={() => setIsDropdownOpen(false)}
                className='h-full w-full fixed inset-0 cursor-default'
              ></button>
              <div className='absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16'>
                <button className='w-full text-left px-4 py-2 account-link hover:text-white'>Account</button>
                <button className='w-full text-left px-4 py-2 account-link hover:text-white'>Support</button>
                <button className='w-full text-left px-4 py-2 account-link hover:text-white' onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Mobile header */}
      <header className='w-full bg-sidebar py-5 px-6 sm:hidden'>
        <div className='flex items-center justify-between'>
          <NavLink to='/' className='text-white text-3xl font-semibold uppercase hover:text-gray-300'>
            Admin
          </NavLink>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white text-3xl focus:outline-none'>
            <svg
              className={isOpen ? 'hidden' : 'block'}
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
            </svg>
            <svg
              className={isOpen ? 'block' : 'hidden'}
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
            </svg>
          </button>
        </div>

        {/* Dropdown Nav */}
        <nav className={isOpen ? 'flex flex-col pt-4' : 'hidden'}>
          <NavLink
            to='/products'
            className={({ isActive }) => {
              return isActive
                ? 'flex items-center active-nav-link text-white py-4 pl-6'
                : 'flex items-center text-white py-4 pl-6 nav-item'
            }}
          >
            <svg
              className='mr-3'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentcolor'
            >
              <path d='M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zM4.118 12 7 6.236 9.882 12 7 17.764 4.118 12zm12.264 7H8.618l3-6h7.764l-3 6z'></path>
            </svg>
            Products
          </NavLink>
          <NavLink
            to='/categories'
            className={({ isActive }) => {
              return isActive
                ? 'flex items-center active-nav-link text-white py-4 pl-6'
                : 'flex items-center text-white py-4 pl-6 nav-item'
            }}
          >
            <svg
              className='mr-3'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentcolor'
            >
              <path d='M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z'></path>
            </svg>
            Categories
          </NavLink>
          <NavLink
            to='/user'
            className={({ isActive }) => {
              return isActive
                ? 'flex items-center active-nav-link text-white py-4 pl-6'
                : 'flex items-center text-white py-4 pl-6 nav-item'
            }}
          >
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
            User
          </NavLink>
          <NavLink
            to='/cart'
            className={({ isActive }) => {
              return isActive
                ? 'flex items-center active-nav-link text-white py-4 pl-6'
                : 'flex items-center text-white py-4 pl-6 nav-item'
            }}
          >
            <svg
              className='mr-3'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentcolor'
            >
              <path d='M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z'></path>
              <circle cx='10.5' cy='19.5' r='1.5'></circle>
              <circle cx='17.5' cy='19.5' r='1.5'></circle>
            </svg>
            Cart
          </NavLink>
        </nav>
      </header>
    </>
  )
}

export default Header
