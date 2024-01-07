'use client'
import { useRef,useState,useEffect, MutableRefObject } from 'react';
import Hero from './Components/Hero'
import Services from './Components/Services';
import About from './Components/About'
import NavBar from './Components/NavBar'
import Team from './Components/Team';
import Contact from './Components/Contact';
import { useScroll,useMotionValueEvent,useTransform,AnimatePresence,motion } from "framer-motion";



export default function Home() {



  const ref =useRef(null)

  const { scrollY } = useScroll({
    target:ref,
    offset:['start end' , 'end end']
  })
 
  const y = useTransform(scrollY, [0,3000], [0,1])
  const [scroll,setScroll] = useState<number>(y.get())




useMotionValueEvent(y, "change", (latest) => {
  setScroll(latest)
  console.log(latest)
})


  const container:{} = {
      animate: {
       backgroundColor:(scroll >.5) ?  "#1F1F1F" : "#F7F3F0",
       color: (scroll >.5)? "white" : "black",
       transition: {duration:0.5,ease:"easeIn"}
      }
  }






return (
  <AnimatePresence   mode='sync'>


   
   
   <NavBar scroll={scroll}/>
   <Hero />
   <About/>
   <Services container={container}/>
 


  
  <motion.div  ref={ref}  variants={container} animate="animate">
<Team  />

   <Contact />
</motion.div>





  





  </AnimatePresence>
)
  
}
