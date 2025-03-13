import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Layout from "./Pages/Layout"
import Signup from "./Pages/authe/Signup"
import Login from "./Pages/authe/Login"
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <div>
      <Routes >
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App