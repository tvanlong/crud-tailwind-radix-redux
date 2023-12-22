import Header from 'src/components/Header'
import Sidebar from 'src/components/Sidebar'

interface Props {
  children?: React.ReactNode
}

function DefaultLayout({ children }: Props) {
  return (
    <div className='bg-gray-100 font-family-karla flex'>
      <Sidebar />
      <div className='w-full flex flex-col h-screen overflow-y-hidden'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout
