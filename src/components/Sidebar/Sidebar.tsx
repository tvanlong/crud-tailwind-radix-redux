import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className='relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl'>
      <div className='p-6'>
        <a href='index.html' className='text-white text-3xl font-semibold uppercase hover:text-gray-300'>
          Admin
        </a>
      </div>
      <nav className='text-white text-base font-semibold pt-3'>
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
    </aside>
  )
}

export default Sidebar
