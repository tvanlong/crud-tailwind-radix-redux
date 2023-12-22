import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginRequest } from 'src/types/login.type'
import { useLoginMutation } from './login.service'
import { useDispatch } from 'react-redux'
import { loginAccount } from './auth.slice'

const initialFormData: LoginRequest = {
  username: '',
  password: ''
}

function Login() {
  const [formData, setFormData] = useState<LoginRequest>(initialFormData)
  const [login, loginResult] = useLoginMutation()

  const dispatch = useDispatch()

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await login(formData).unwrap()
    dispatch(loginAccount(result.token))
    setFormData(initialFormData)
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
              Sign in to your account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900'>
                  Username
                </label>
                <input
                  type='username'
                  name='username'
                  id='username'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  value={formData.username}
                  onChange={handleChangeValue}
                />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={formData.password}
                  onChange={handleChangeValue}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='remember' className='text-gray-500'>
                      Remember me
                    </label>
                  </div>
                </div>
                <Link to={''} className='text-sm font-medium text-primary-600 hover:underline'>
                  Forgot password?
                </Link>
              </div>
              <button
                type='submit'
                className='w-full bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                disabled={loginResult.isLoading}
              >
                {loginResult.isLoading ? 'Loading...' : 'Sign in'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
