import Contact from '../components/common/Contact'
import Navbar from '../components/layout/Navbar'

function ContactRoute() {
  return (
    <>
    <Navbar/>
    <main className="overflow-x-hidden">
      <Contact/>
    </main>
    </>
  )
}

export default ContactRoute