'use client';
import Testimonials from "./Testimonials";
import { useState } from "react";
import {motion} from 'framer-motion'
const About = () => {
    const [testimonials, setTestimonials]= useState<boolean>(false)
    const Circle = () => {
        return (
            <motion.div 
            exit={{x:-500}}
            layoutId="testimonials"
            key="testimonialButton"
            onClick={()=> {setTestimonials(!testimonials)}} 
            className=" cursor-pointer h-36 w-36 lg:h-48 lg:w-48 flex items-center justify-center rounded-full text-lg bg-gray-400 self-center lg:self-end">
            <h3>see testimonials</h3>
            </motion.div>
        )
    }
    return (
   <>
      {testimonials ?   
        
        <Testimonials testimonials={testimonials} setTestimonials={setTestimonials}/>
        :
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,transition:{type:"spring"}}}
        className="flex flex-col items-center justify-around  lg:grid lg:grid-rows-4 lg:grid-cols-2 min-h-screen lg:h-screen place-items-center text-center lg:text-left border-b-2 border-gray-400 p-8">
      <div className="flex flex-col items-center justify-center row-start-1 row-end-2 col-span-full gap-8">
    <div className="flex items-center justify-center gap-4"><span>(01)</span> <p className="text-xl lg:text-2xl">about</p></div>
      <h1 className="text-3xl lg:text-5xl">there&apos; a meaning in cleaning</h1>
      </div>

      <div className="row-start-2 row-end-4 col-start-1 lg:w-3/4 lg:text-4xl  p-12 lg:p-0">
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <div className="flex flex-col items-start justify-between gap-12 row-start-2 row-end-5 col-start-2 lg:w-3/4 lg:text-xl p-12 lg:p-0">
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
      <Circle/>
      </div>
    

  </motion.div>
    }</>
     );
}
 
export default About;