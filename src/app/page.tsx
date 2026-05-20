import Navbar from "@/components/Navbar"
import About from "@/sections/About"
import Hero from "@/sections/Hero"
import Projects from "@/sections/Projects"
import Skills from "@/sections/Skills"
import Contact from "@/sections/Contact"



const page = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      
    </div>
  )
}

export default page
