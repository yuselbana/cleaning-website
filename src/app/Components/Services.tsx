'use client';
import Image, { StaticImageData } from "next/image"
import img from '../../../public/test.jpg' 
import { useState,useEffect,useRef } from "react";
import {motion} from 'framer-motion'
import { useInView } from "framer-motion";
import { MutableRefObject } from "react";



 const Circle = ({title}: {title?:string}) => {
    const colorArray:string[] = ["#EA4F1B","#ffa500","#4b0082"]
    const [circleColor,setCircleColor] = useState<number>(0)
    const ref = useRef(null)
    const isInView = useInView(ref, {once:false})
   
  const handleCircleColorAnimation = () => {
   setCircleColor(circleColor+1)
   if(circleColor == colorArray.length-1) {
    setCircleColor(0)
   }
  }
    return (
        <motion.div 
        ref={ref}
        animate ={{scale: isInView? 1:0.25, transition:{type:"spring",duration:2}, backgroundColor:colorArray[circleColor]}}
        onClick={handleCircleColorAnimation}
        className="cursor-pointer rounded-full h-48 w-48 bg-gray-400 hidden xl:inline row-start-4 row-end-6 col-start-3 col-end-5 justify-self-center self-center z-10">
        {title}
        </motion.div>
    )
}


    
const serviceObj= [
    {title:'regular cleaning', description:"A Regular Cleaning provides our clients with speedy performance allowing us to take care of the basic amenities in the home. Cleaning and Disinfecting the living rooms, kitchens, bedrooms, bathrooms while dusting every corner. Cleaning Hardwood Flooring while also vacuuming carpets, rugs and cleaning windows. Organizing every room and arranging it in the style you want it.  Whether you need to save time or have a family gathering this is what you're definitely  looking for. " ,image:img},
    {title:'carpet/steam cleaning', description:"Carpets need to be deep cleaned almost once every six months and with that we provide our own carpet cleaner incorporated with scented detergent to break down old dirt and bacteria that is seeped within carpeting. But, with those that carry babies and are sensitive to smells we also provide steam cleaning. 100% eco friendly option, steam cleaning is water at high temperatures that get rid of all bacteria in carpets and break down any dirt or grout." ,image:img},
    {title:'deep cleaning', description:"Deep Cleaning happens usually once a year either yourself or Better Home Services will spend hours in your home moving furniture and dusting everything from the ceiling to that hard to reach spot in your pantry. Cleaning and Disinfecting every room while vacuuming and cleaning hardwood flooring. Focusing on windows getting on top of refrigerators, opening windows and cleaning the grout on tile flooring. Even on top of cabinets. Basically take a regular cleaning and double it.  YOU NAME IT WE DO IT. ", image:img},
    {title:'garage cleaning', description:"Let me guess... your garage looks like a storage unit with clutter and bugs and has been neglected for years. Let's bring back that garage you had when you bought your home. Decluttering your garage getting rid of cobwebs and bugs. Take away anything you don't need and making it somewhere you can store your car or even have time for yourself." ,image:img}
]

const Services = ({container}:{container:{}}) => {
    const [service,setService] = useState<{title:string, description:string,image:StaticImageData}>(serviceObj[0])

    const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
        
       let service  = (e.target as HTMLDivElement).innerHTML
        for(var i =0;i<serviceObj.length;i++) {
            if(service == serviceObj[i].title) {
                setService(serviceObj[i])
            }
        }


    }
    const ServiceRow = ({title, number} : {title:string,number:string}) => {
        return (
            <div onClick={(e)=> {handleClick(e)}} className={`cursor-pointer flex items-center justify-center gap-2 ${service.title == title ? "font-semibold" : ""} `}>
                   <span className="text-brightOrange">{number}</span>
                   <p className="text-2xl lg:text-3xl">{title}</p>
            </div>
        )
    }
    
    return ( 
        <motion.div variants={container} animate="animate" className="flex flex-col items-center gap-8  justify-center xl:grid xl:grid-rows-9 xl:grid-cols-5 min-h-screen xl:h-screen  xl:p-20">
            <div className="xl:col-start-1 xl:row-start-2 w-full flex justify-center xl:justify-start items-center gap-2">
                <span> (01)</span>
                <p className="text-xl lg:text-2xl">services</p>
            </div>

            <div className="xl:row-start-2 xl:row-end-5 xl:col-start-1 xl:col-end-4 flex justify-start  items-center ">
                <h1 className="text-3xl xl:text-5xl">our services</h1>
        
            </div>

          <div className="flex justify-start  items-center xl:row-start-6 xl:row-end-9 xl:col-start-1 xl:col-end-4 p-4 xl:p-0 ">
          <div className="flex  flex-col md:flex-row xl:flex-col items-center justify-center xl:items-start xl:justify-start gap-8 ">
            <ServiceRow title={"regular cleaning"} number={'(i)'}/>
            <ServiceRow title={"carpet/steam cleaning"} number={'(ii)'}/>
            <ServiceRow title={"deep cleaning"} number={'(iii)'}/>
            <ServiceRow title={"garage cleaning"} number={'(iv)'}/>
            </div>


          </div>
            <div 
            className="xl:row-start-2 xl:row-end-5 xl:col-start-4 xl:col-end-6 h-48  xl:h-full w-full flex-grow  xl:inline relative rounded-xl overflow-hidden">
                {/* <span className="text-brightOrange">(i)</span> */}
                <Image alt="Service Images" className="object-cover xl:object-fill" fill src={service.image}/>
            </div>
            <Circle/>
            <div className="xl:row-start-6 xl:row-end-9 xl:col-start-3 xl:col-end-9 flex flex-col justify-center items-center text-center xl:text-left xl:items-start gap-16 z-20 ">
            <h1 className="text-3xl xl:text-4xl">{service.title}</h1>
            <p className="xl:text-xl">{service.description}</p>
            </div>

            


        </motion.div>

     );
}
 
export default Services;

