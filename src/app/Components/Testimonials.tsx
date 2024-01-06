import { StarIcon } from "@heroicons/react/24/solid";
import {motion} from 'framer-motion'

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



interface TestimonialsProps {
    testimonials:boolean,
    setTestimonials:React.Dispatch<React.SetStateAction<boolean>>
}

const Testimonials:React.FunctionComponent<TestimonialsProps> = ({testimonials,setTestimonials}) => {

    const Circle = ({title}: {title?:string}) => {
        return (
            <motion.div
            layoutId="testimonials"
            onClick={()=> {setTestimonials(!testimonials)}} 
            className="rounded-full h-48 w-48 cursor-pointer   bg-gray-400 items-center justify-center flex justify-self-center row-start-6 row-end-8 lg:row-start-8 lg:row-end-9  self-end ">{title}</motion.div>
        )
    }

    return ( 
        <motion.div 
        initial={{opacity:0.5}}
        animate={{opacity:1, transition:{type:"spring"}}}
            className="grid grid-rows-8 lg:grid-rows-8 text-center min-h-screen lg:h-screen lg:p-12">
            <div className="flex items-center justify-center gap-4"><span>(02)</span> <p>why us</p></div>
            <div className="flex flex-col items-center justify-start gap-8 row-start-2 row-end-6 lg:row-end-8 ">
                <h1>reviews posted by customers</h1>
                <h3>Meng W.</h3>
                <RowOfStars/>
                <p className="w-1/2">Excellent services from two young cleaning professionals Nolan & Abdullah! I had them do a one-time deep cleaning of a two bedroom townhouse which was very very dirty. And they did an amazing job in bringing the place to life! Both of them were very hardworking,patient and accommodating and knowledgeable. 
                Lots of honor and character! I would definitely hire them again. Many thanks! Highly recommended!</p>
            </div>
        <Circle title={"back"}/>

        </motion.div>
     );
}
 
export default Testimonials;