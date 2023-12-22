import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import DefaultLayout from 'src/layouts/DefaultLayout'
import Login from 'src/pages/Login'
import Products from 'src/pages/Products'
import Categories from 'src/pages/Categories'
import Cart from 'src/pages/Cart'
import User from 'src/pages/User'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from './pages/Login/auth.slice'

function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  // Nếu đã đăng nhập thì cho vào trang products, nếu chưa đăng nhập thì cho vào trang login
  return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

function RejectedRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  // Nếu chưa đăng nhập thì cho vào trang login, nếu đã đăng nhập thì cho vào trang products
  return !isAuthenticated ? <Outlet /> : <Navigate to='/products' />
}

function App() {
  return (
    <Routes>
      <Route element={<RejectedRoute />}>
        <Route path='/' element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route
          path='/products'
          element={
            <DefaultLayout>
              <Products />
            </DefaultLayout>
          }
        />
        <Route
          path='/categories'
          element={
            <DefaultLayout>
              <Categories />
            </DefaultLayout>
          }
        />
        <Route
          path='/cart'
          element={
            <DefaultLayout>
              <Cart />
            </DefaultLayout>
          }
        />
        <Route
          path='/user'
          element={
            <DefaultLayout>
              <User />
            </DefaultLayout>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
