import { Hero, Main, Services, Reviews, Contact } from "../components"
import HashLink from "../hooks/scrollToHash"
function Home() {
  return (
    <>
    <HashLink />
    <header>
        <Hero />
    </header>
    <Main />
    <Services />
    <Reviews />
    <Contact />
    </>
  )
}

export default Home