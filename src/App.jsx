import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Layout from "./Layout"


function App() {
  return (
<Router>
  <Layout>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<Home/>}/>
  </Routes>
  </Layout>
</Router>
  )
}

export default App
