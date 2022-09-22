import Footer from 'components/site/footer'
import Header from 'components/site/header'
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
        id="site-root"
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
