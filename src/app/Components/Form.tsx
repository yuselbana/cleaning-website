'use client';
import { ArrowLeftIcon,ArrowRightIcon } from "@heroicons/react/24/solid";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Input, Select } from "@rewind-ui/core";
import { ChangeEvent, FormEvent, SetStateAction, useEffect } from "react";
import Terms from "./Terms";
import {useState} from 'react'
import {motion} from 'framer-motion'
import axios from 'axios'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";






const Circle = ({title}: {title?:string}) => {
    return (
        <div className="rounded-full h-48 w-48 lg:h-96 lg:w-96 bg-gray-400 lg:inline col-start-2 col-end-3 row-start-3 row-end-5 justify-self-center self-end ">{title}</div>
    )
}
interface FormProps {
    form:boolean,
    setForm:React.Dispatch<SetStateAction<boolean>>
    date:string |null  |undefined,
    time:string |null  |undefined
}


    
const Form: React.FunctionComponent<FormProps> = ({form,setForm,date,time}) => {
    const router = useRouter()
    const [terms,setTerms] = useState<boolean>(false)
    const [submitted,setSubmitted] = useState(false)
    const [formValues,setFormValues] = useState<{
        fullName:string, email:string,phone:string,dateAndTime:string, address:string,service:string, message:string, acceptedTerms:string,
    }>({
        fullName:" ",
        email:" ",
        phone:" ",
        dateAndTime:`${date} at ${time}`,
        address:" ",
        service:" ",
        message:" ",
        acceptedTerms:" "
    })


    const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true)
        try {
        const res = await axios.post('/api/sendEmail', formValues)
      setTimeout(()=> {
        if(res.status == 200) {
            router.push('/success')
      }else {
          router.push('/error')
      }
      },3000)
        } catch (error) {
           console.error(error)
        }
        }
        
    return ( 
        <div className="grid grid-cols-1 grid-rows-10 lg:grid-rows-5 lg:grid-cols-2 lg:h-screen min-h-screen w-full bg-greyBlack text-white">
            <div onClick={()=>{setForm(!form)}} className="row-span-1 col-span-1 justify-self-center lg:justify-self-start self-center w-fit lg:ml-20 cursor:pointer"> <ArrowLeftIcon className="text-white h-12 w-12 cursor-pointer"/> </div>
            <div className="row-start-5 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 self-center flex items-center justify-center"><motion.p layoutId="dateAndTime" className="text-brightOrange">{date} at {time}</motion.p></div>

            <div className="grid grid-rows-4 grid-cols-2 row-start-2 row-end-5 lg:row-end-6 h-full w-full place-items-center text-5xl lg:text-9xl p-12">
            <h3 className="row-start-1 row-end-1 col-start-1 col-end-2 justify-self-end">lets</h3>
            <h3 className="row-start-2 row-end-3 col-start-2 col-end-3 justify-self-start z-10">get</h3>
            <h3 className="col-start-1 col-end-3 row-start-3 row-end-4  z-10">in touch</h3>
            <Circle/>
            </div>

            <div className="w-full h-full lg:col-start-2 row-start-6 row-end-11 lg:row-start-2 lg:row-end-6  text-gray-400 p-4 lg:p-12 grid place-items-center">
                {
                   submitted ? 
                   <ClimbingBoxLoader size={40} color="#EA4F1B"/>
                   :
                   <form onSubmit={handleSubmit} className="grid grid-rows-7  h-full  lg:w-3/4 place-items-center ">
                    <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFormValues({...formValues,fullName:e.target.value})}} type="text" required placeholder="full name" tone={"transparent"} withRing={false} className="rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                    <div className="w-full flex justify-between items-center">
                    <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFormValues({...formValues,email:e.target.value})}} type="email" required placeholder="email" tone={"transparent"} withRing={false} className=" w-[45%] rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                    <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFormValues({...formValues,phone:e.target.value})}} type="tel" maxLength={10} required placeholder="phone number" tone={"transparent"} withRing={false} className=" w-[45%] rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                    </div>
                    <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFormValues({...formValues,address:e.target.value})}} type="text" required placeholder="123 Diamond Lane" tone={"transparent"} withRing={false} className="rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                    <Select onChange={(e:ChangeEvent<HTMLSelectElement>)=>{setFormValues({...formValues,service:e.target.value})}}  required tone={"transparent"} withRing={false} className="border-gray-400 border-2 text-white  ">
                        <option className="bg-greyBlack " value="" disabled selected>select your service</option>
                        <option className="bg-greyBlack">regular cleaning</option>
                        <option className="bg-greyBlack">carpet/steam cleaning</option>
                        <option className="bg-greyBlack">deep cleaning</option>
                        <option className="bg-greyBlack">garage cleaning</option>
                        <option className="bg-greyBlack">miscellaneous (within reason)</option>
                    </Select>
                     <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFormValues({...formValues,message:e.target.value})}} required placeholder="message" tone={"transparent"} withRing={false} className="rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                
                 <div className="flex items-center justify-start lg:justify-center gap-2">
                 <label className="cursor-pointer" >i agree to these <span onClick={()=>{setTerms(!terms); document.body.style.overflowY="hidden";  }} className="text-brightOrange">terms & conditions</span> </label>
                 <input onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFormValues({...formValues,acceptedTerms:e.target.value})}} type="checkbox" required></input>
                 </div>
          
                 <button className=" justify-self-center lg:justify-self-end"><ArrowRightIcon className="text-white h-12 w-12"/></button>
             
                  
                </form> 
                }
            </div>
            {terms? <Terms terms={terms} setTerms={setTerms}/> : ''}

        </div>

     );
}
 
export default Form;