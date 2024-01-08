'use client';
import { StarIcon } from "@heroicons/react/24/solid";
import {motion} from 'framer-motion'
import {useState,useEffect, SetStateAction, MutableRefObject} from 'react'
import { ArrowLeftIcon,ArrowRightIcon } from "@heroicons/react/24/solid";

const RowOfStars= () => {
   return (
    <div className="flex items-center justify-center ">
    <StarIcon className="text-brightOrange h-6 w-6"/>
    <StarIcon className="text-brightOrange h-6 w-6"/>
    <StarIcon className="text-brightOrange h-6 w-6"/>
    <StarIcon className="text-brightOrange h-6 w-6"/>
    <StarIcon className="text-brightOrange h-6 w-6"/>
    </div>
   )
}




const testimonialPeople:{name:string,desc:string,rating:number}[] = [
    {name:"Meng W.",desc:"Excellent services from two young cleaning professionals Nolan & Abdullah! I had them do a one-time deep cleaning of a two bedroom townhouse which was very very dirty. And they did an amazing job in bringing the place to life! Both of them were very hardworking,patient and accommodating and knowledgeable. Lots of honor and character! I would definitely hire them again. Many thanks! Highly recommended!",rating:5},
    {name:"Ceflyn T.",desc:"They were on time and very organized. Covered their shoes and were very diligent in their cleaning. Anything I pointed out at the end (just items I know of that they would not as it is an unfamiliar house) was immediately remediated",rating:4}
]


interface TestimonialsProps {
    testimonials:boolean,
    setTestimonials:React.Dispatch<SetStateAction<boolean>>
   
}
const Testimonials:React.FunctionComponent<TestimonialsProps> = ({testimonials,setTestimonials,}) => {
const [testimonialNumber,setTestimonialNumber] =useState<number>(0)
    const Circle = ({title}: {title?:string}) => {
        return (
            <motion.div
            whileHover={{scale:1.2}}
            layoutId="testimonials"
            onClick={()=> {setTestimonials(!testimonials)}} 
            className="rounded-full h-48 w-48 cursor-pointer   bg-white text-black items-center justify-center flex justify-self-center row-start-6 row-end-8 lg:row-start-8 lg:row-end-9  self-end ">{title}</motion.div>
        )
    }
    useEffect(()=> {
        if(testimonialNumber == testimonialPeople.length) {
            setTestimonialNumber(0)
        }else if(testimonialNumber<0){
            setTestimonialNumber(testimonialPeople.length-1)
        }
    },[testimonialNumber])

    return ( 
        <motion.div 
        initial={{opacity:0.5}}
        animate={{opacity:1, transition:{type:"spring"}}}
    
        id="team"
            className="grid grid-rows-8 lg:grid-rows-8 text-center min-h-screen lg:h-screen lg:p-12">
           
            <motion.div className="flex flex-col items-center justify-start gap-8 row-start-2 row-end-6 lg:row-end-8 ">
                <h1 className="text-2xl lg:text-3xl">reviews posted by customers</h1>
                <h3>{ testimonialPeople[testimonialNumber]?.name}</h3>
                <RowOfStars/>
                <p className="w-3/4 lg:w-1/2">{testimonialPeople[testimonialNumber]?.desc}</p>
                <div className="flex items-center justify-center gap-8">
                    <ArrowLeftIcon onClick={()=>{setTestimonialNumber(testimonialNumber-1)}} className="text-brightOrange h-12 w-12 cursor-pointer"/>
                    <ArrowRightIcon onClick={()=>{setTestimonialNumber(testimonialNumber+1)}} className="text-brightOrange h-12 w-12 cursor-pointer"/>
                </div>
            </motion.div>
        <Circle title={"back"}/>

        </motion.div>
     );
}
 
export default Testimonials;