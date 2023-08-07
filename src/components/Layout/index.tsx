import Footer from '../Footer'
import Header from '../Header'

function Layout(props: any) {
  return (
    <>
      <Header />
      <div className="layout">{props.children}</div>
      <Footer />
    </>
  )
}

export default Layout
