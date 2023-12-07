import React from 'react'
import Navbar from './component/navbar/Navbar'
import SliderBox from './component/sliderbox/SliderBox'
import Card from './component/card/Card'
import Footer from './component/footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <SliderBox/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
