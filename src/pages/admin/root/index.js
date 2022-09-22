import Footer from 'components/admin/footer'
import Header from 'components/admin/header'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
        id="admin-root"
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
