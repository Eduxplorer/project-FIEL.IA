
import './App.css'
import About from './pages/HomePage/About/About'
import EasyAcess from './pages/HomePage/EasyAcess/EasyAcess'
import ExperienceSection from './pages/HomePage/ExperienceSection/ExperienceSection'
import Header from './pages/HomePage/Header/Header'
import Plans from './pages/HomePage/Plans/Plans'
import ResourcesSection from './pages/HomePage/ResourcesSection/ResourcesSection'
import Rewards from './pages/HomePage/Rewards/Rewards'

function App() {
  return (
    <>
    <Header />
    <About />
    <ResourcesSection />
    <ExperienceSection  />
    <EasyAcess />
    <Plans />
    <Rewards />
    </>
  )
}

export default App
