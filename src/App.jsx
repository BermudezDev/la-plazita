import { Routes, BrowserRouter, Route, Outlet } from "react-router-dom"
import { Suspense, lazy } from "react"
import { Footer, NavBar } from "./components"
const Home = lazy(()=> import("./pages/Home"))
const About = lazy(()=> import("./pages/About"))
const Products = lazy(()=> import("./pages/Products"))
const Locals = lazy(()=> import("./pages/Locals"))

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />}> 
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/products' element={<Products />}> </Route>
        <Route path='/locals' element={<Locals />}> </Route>
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

function Layout(){
  return(
    <>
    <NavBar />
    <Suspense fallback={
    <section className="absolute z-50 flex h-screen w-full items-center justify-center bg-orange-200">
        <p className="animate-wiggle bg-amber-700 px-4 py-3 text-6xl text-orange-200 animate-duration-1000">Loading...</p>
    </section>}>
      <Outlet />
    </Suspense>
    <Footer />
    </>
  )
}

export default App
