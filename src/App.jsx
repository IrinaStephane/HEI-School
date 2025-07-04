import About from "./components/About"
import Admission from "./components/Admission"
import { Debouche } from "./components/Debouche"
import Domains from "./components/Domains"
import HeroSwiper from "./components/HeroSwiper"
import Langage from "./components/Langage"
import Navbar from "./components/Navbar"
import Partner from "./components/Partner"
import Pedagogie from "./components/Pedagogie"
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
      <Admission />
      <Pedagogie />
      <Langage />
      <Partner />
    </>
  )
}

export default App
