import About from "./components/About"
import Header from "./components/Header"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <About/>
      <Products/>
      <Testimonials/>
    </div>
  )
}

export default App