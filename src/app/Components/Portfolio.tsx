'use client';
import Image, { StaticImageData } from "next/image"
import { imageArr } from "../data/PortfolioData"
import {motion} from 'framer-motion'
import { MutableRefObject, SetStateAction,useEffect,useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";




const ImageComponent = ({img,revealImages}:{img:StaticImageData,revealImages:boolean}) => {
    

    return (
        <div  className="overflow-hidden">
         <Image className="object-contain rounded-3xl" alt="Portfolio Work" src={img}/> 

        </div>
    )
}



const Portfolio = ({portfolio,setPortfolio}:{portfolio:boolean,setPortfolio:React.Dispatch<SetStateAction<boolean>>}) => {
   
    const Circle = ({title}: {title?:string}) => {
        return (
            <motion.div
            whileHover={{scale:1.2}}
            layoutId="portfolio"
            onClick={()=> {setPortfolio(!portfolio); }} 
            className="rounded-full h-48 w-48 cursor-pointer   bg-black text-white items-center justify-center flex justify-self-center ">{title}</motion.div>
        )
    }



    const [revealImages,setRevealImages] = useState(false)

        useEffect(()=> {
            
    setTimeout(()=> {
        setRevealImages(!revealImages)
    },2000)

    },[portfolio])
  
    return (
        <motion.div 
      
        initial={{opacity:0.5}}
        animate={{opacity:1, transition:{type:"spring"}}}
        className="min-h-screen grid grid-rows-8 p-8 ">
            <div className="row-start-1 row-end-2 lg:row-end-3 flex flex-col items-center justify-center gap-4">
     
        <h1 className="text-3xl lg:text-5xl">our work</h1>
        <p className="text-center p-2 lg:p-0 lg:w-3/4">services include deep cleaning, regular cleaning, carpet cleanings, steam cleaning and garage cleanings. we specialize in many niches and can properly take care of any job that comes our way. 
</p>
             <Circle title={"back"}/>
            </div>

           
        <div className="grid h-full row-start-2 lg:row-start-3 row-end-9 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4  p-4 ">
            {revealImages ? (imageArr.map((img,key)=> {
                return (
                    <ImageComponent revealImages={revealImages} key={key} img={img.image}/>
                )
            })) : <ClipLoader className="justify-self-center self-start" size={80} color="black"/>}
        </div>


        </motion.div>
    )
}
export default Portfolio