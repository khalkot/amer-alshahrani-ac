import About from "./components/About"
import Header from "./components/Header"
import Products from "./components/Products"

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <About/>
      <Products/>
    </div>
  )
}

export default App