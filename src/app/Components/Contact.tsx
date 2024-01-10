'use client';
import Link from "next/link";
import { MutableRefObject, useState } from "react";
import {motion} from 'framer-motion'

import ClipLoader from "react-spinners/ClipLoader";
const Contact = () => {
    const [loading,setLoading ] = useState<boolean>(false)
    return (
        <div id="contact"  className="grid place-items-center h-screen">

        <div className="row-start-1 row-end-2 col-start-1 col-end-2 border-b-2 border-b-gray-400 h-full w-full"></div>
        <div className="flex flex-col items-start justify-center lg:w-3/4  row-start-1 row-end-2 col-start-1 col-end-2 ">
        <div className="flex items-center justify-center gap-4 "><span>(04)</span> <p>get in touch</p></div>
        <h3 className="text-7xl">contact</h3>
        </div>

       
        
       {loading ?  
       <ClipLoader size={40} color={"#EA4F1B"}/>
    :
    <Link onClick={()=> {setLoading(!loading)}} href='/contact'>
    <motion.div whileHover={{scale:1.2}} className="cursor-pointer rounded-full w-96 h-96 bg-white text-black flex items-center justify-center">
 
    <p>get a quote</p>
    
    </motion.div>
    </Link>
    }
       

     
        <span>licensed and insured by <Link target="_blank" className="text-brightOrange" href="https://coterieinsurance.com/">Corterie Insurance</Link></span>
        </div>
    )
}
export default Contact