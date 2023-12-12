import './App.css'
import Home from './components/Home/Home'
import LeftBar from './components/LeftBar/LeftBar'
import Proyects from './components/Proyects/Proyects';
import { gsap } from "gsap";

function App() {

  return (
    <>
      <LeftBar />
      {/* <Home /> */}
      <Proyects />
    </>
  )
}

export default App
