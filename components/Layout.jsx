import Navbar from './Navbar'

function Layout({children}) {
  return (
    <>
    <Navbar></Navbar>
    {children}
    </>
  )
}

export default Layout