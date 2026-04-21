import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <Products/>
      <Testimonials/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App