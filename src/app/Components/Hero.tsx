
import Image from "next/image"
import heroImage from '../../../public/cleaningLogo.png'
import { MotionValue,motion } from "framer-motion"
import Link from "next/link"


const Circle = ({title}: {title?:string}) => {
    return (
        <Link className="self-center "    href="#contact " >
        <motion.div
     className="rounded-full h-48 w-48 cursor-pointer   bg-black text-white items-center justify-center flex "
       whileHover={{scale:1.2}}
        >
        
         {title}
     
            </motion.div>
            </Link>
    )
}

const Hero = () => {
    return (
        <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-4  md:h-screen md:p-0 p-4 border-b-2 border-gray-400 " >
            <div className="row-start-1 row-end-2 md:row-start-1 md:row-end-5 flex flex-col items-center text-center md:text-left md:items-start justify-center md:justify-start z-10 p-8 gap-8">
            <div className="w-full overflow-hidden grid ">
            <Image alt="A Better Home Services Logo"  className="object-contain place-self-center  " src={heroImage}/>
            </div>
          
            <h1 className=" text-3xl lg:text-5xl">lorem ipsum, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h1>
            <p className="lg:text-xl">lorem ipsum, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            <Circle title={"book now"}/>
          
            </div>

            <div className="h-full md:h-full w-full row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-5 rounded-3xl md:rounded-bl-none md:rounded-br-none md:rounded-tr-none md:rounded-tl-3xl  overflow-hidden ">
                <video muted autoPlay loop className="h-full w-full object-cover">
                    <source src="/videos/main.mp4"></source>

                </video>
            </div>


        </div>
    )
}
export default Hero