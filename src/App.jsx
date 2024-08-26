import { useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Program from "./Components/Programs/Program"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"


const App = () => {

  const [hVideo,setHVideo] = useState(false);



  return (

    <div>

      <Navbar/>
      <Hero/>
      <div className="container">
        <Title text1='OUR PROGRAM' text2='What We Offer'/>
      <Program />
        <About setHVideo={setHVideo}/>

      <Title tle text1='Gallery' text2='Campus Photos' />
      <Campus/>

      <Title text1='TESTIMONIALS' text2='What Student Says' />
      <Testimonials />

      <Title text1='Contact Us' text2='Get in Touch' />
      <Contact/>

      <Footer />

      </div>

      <VideoPlayer hVideo={hVideo} setHVideo={setHVideo}/>

    
      
    </div>
  )
}

export default App
