import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"


function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<Home/>}/>
  </Routes>
</Router>
  )
}

export default App
