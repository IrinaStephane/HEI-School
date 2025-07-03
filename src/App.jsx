import About from "./components/About"
import { Debouche } from "./components/Debouche"
import Domains from "./components/Domains"
import HeroSwiper from "./components/HeroSwiper"
import Navbar from "./components/Navbar"
import { Team } from "./components/Team"


function App() {

  return (
    <>
      <Navbar />
      <HeroSwiper />
      <About />
      <Team />
      <Debouche />
      <Domains />
    </>
  )
}

export default App
