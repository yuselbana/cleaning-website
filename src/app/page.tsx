'use client'
import { AnimatePresence,useInView,motion } from 'framer-motion';
import { useRef,useState,useEffect } from 'react';
import Image from 'next/image'
import Hero from './Components/Hero'
import Services from './Components/Services';
import About from './Components/About'
import NavBar from './Components/NavBar'
import Team from './Components/Team';
import Contact from './Components/Contact';
import Form from './Components/Form';
import Testimonials from './Components/Testimonials';
import CalendarPage from './Components/CalendarPage';


export default function Home() {

  const darkTransition = useRef(null)
  const isInView = useInView(darkTransition,{once:false})
  const container:{} = {
      animate: {
       backgroundColor: isInView?   "#1F1F1F" : "#F7F3F0",
       color: isInView ? "white" : "black",
       transition: {duration:0.5, ease:"easeIn"}
      }
  }



return (
  <AnimatePresence  mode='sync'>


   
   
   <NavBar/>
   <Hero />
   <About/>
   <Services container={container}/>
 


   <Team container={container} darkTransition={darkTransition} />
   <Contact/>
  





  </AnimatePresence>
)
  
}
