import { ToastContainer} from 'react-toastify';
import Header from "./components/Header"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer/>
      <Header/>
      <Products/>
      <Testimonials/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App