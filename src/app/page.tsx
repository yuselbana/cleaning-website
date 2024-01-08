'use client'
import { useRef,useState,useEffect, MutableRefObject } from 'react';
import Hero from './Components/Hero'
import Services from './Components/Services';
import About from './Components/About'
import NavBar from './Components/NavBar'
import Team from './Components/Team';
import Contact from './Components/Contact';
import { useScroll,useMotionValueEvent,useTransform,AnimatePresence,motion } from "framer-motion";


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function Home() {

  const { scrollY } = useScroll()
 
  const y = useTransform(scrollY, [0,4000], [0,9])
  const [scroll,setScroll] = useState<number>(y.get())
  const [darkThreshold,setDarkThreshold] = useState<number>(1.1)
  const [portfolio, setPortfolio]= useState<boolean>(false)



useMotionValueEvent(y, "change", (latest) => {
  setScroll(latest)
  // console.log(latest)
})


  const container:{} = {
      animate: {
       backgroundColor:(scroll >darkThreshold) ?  "#1F1F1F" : "#F7F3F0",
       color: (scroll >darkThreshold)? "white" : "black",
       transition: {duration:0.5,ease:"easeIn"}
      }
  }

  useEffect(()=> {

   const {width,height}  = getWindowDimensions()

   if(width>1000) {
    setDarkThreshold(5)

   } else if( width >600 && width<800) {
    setDarkThreshold(8.2)
   }else if(width< 600){
    setDarkThreshold(7.2)
   }
  })








return (
  <AnimatePresence   mode='sync'>


   
<Hero />
   {!portfolio && <NavBar scroll={scroll} darkThreshold={darkThreshold}/>}

 
 <About portfolio={portfolio} setPortfolio={setPortfolio}/>



{!portfolio && 

<>
<Services container={container}/>

<motion.div variants={container} animate="animate">
<Team  />

 <Contact />
</motion.div>
</>


}






 
  





  </AnimatePresence>
)
  
}
