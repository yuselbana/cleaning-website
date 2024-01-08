'use client';
import { ChangeEvent, useEffect,useState } from "react";
import Form from './Form'
import React from 'react'
import { Accordion, Calendar } from "@rewind-ui/core";
import {motion} from 'framer-motion'
import Link from "next/link";
import format from "date-fns/format";
import {FormControl} from "@rewind-ui/core";
import { isFriday } from "date-fns";
import { ArrowLeftIcon,ArrowRightIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";



const CalendarPage  = () => {
 
    const currentDate = new Date();
    const yesterday = new Date()
    yesterday.setDate(currentDate.getDate()-1)
   
    const formattedDate = format(currentDate, 'EE MMM dd yyyy')
    const formattedTime = format(currentDate, 'h:mm bbb');
    
   
    var allTimes = ['9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', 
    '2:00 pm','3:00 pm','4:00 pm', '5:00 pm','6:00 pm','7:00 pm','8:00 pm','9:00 pm'];

    function createCustomDate(hours:number, minutes:number) {
        const currentDate = new Date();
        currentDate.setHours(hours, minutes, 0, 0);
        return currentDate;
      }
      
  
      const customDateTimes = allTimes.map(allTimes => {
        const [hours, minutes, period] = allTimes.split(/[ :]/);
        const isPM = period.toLowerCase() === 'pm';
        const adjustedHours = isPM && parseInt(hours, 10) !== 12 ? parseInt(hours, 10) + 12 : parseInt(hours, 10);
        return createCustomDate(adjustedHours, parseInt(minutes, 10));
      });
   

      const availableTimes:string[]= []
      for(var i =0; i< customDateTimes.length;i++) {
        if(customDateTimes[i].getTime() > currentDate.getTime()) {
           availableTimes.push(format(customDateTimes[i], 'h:mm bbb'))
        }
      }





        const [mapTimes, setMapTimes] = useState<string[]>(allTimes)
        const [time,setTime] = useState<string | undefined | null>('9:00 am')
        const [date,setDate]= useState<string | null |undefined>(currentDate.toDateString())
        const [form,setForm] = useState<boolean>(false)

    



        
        const handleClick = ({e}: {e:React.MouseEvent<HTMLDivElement>}) => {
            const divTarget = e.target as HTMLDivElement; 
            setTime(divTarget.innerHTML);
      
        }

        const TimeComponent = ({t}:{t:string})=> {
            return (
                <motion.div
                onClick={(e: React.MouseEvent<HTMLDivElement>)=>handleClick({e})}            
                className={`flex justify-start items-center p-4 border-2  hover:cursor-pointer ${t==time ? "bg-white text-black": "text-white"} `}>
                    {t}
                </motion.div>
            )
        }
     
        useEffect(() => {
          setTime(mapTimes[0])
        }, [mapTimes]);


      useEffect(() => {
        if(date) {
          const [dayOTW, month, day ,year] = date.split(/[ ]/)

          if(parseInt(day,10) == currentDate.getDate()) {
            setMapTimes(availableTimes)
          }else{
            setMapTimes(allTimes)
          }
          if(dayOTW == "Sat" || dayOTW == "Sun") {
            setMapTimes([])
          }

        }else {
          setDate(formattedDate)
        }
      }, [date]);

     

    

      

    return (  
            <>
          {form ? 
          
          <Form date={date} time={time} form={form} setForm={setForm}/> 
          
          
          : 
          
          
          <div className="min-h-screen xl:h-screen grid gap-y-10 xl:gap-y-0 xl:grid-rows-4 xl:grid-cols-3  place-items-center p-4 bg-greyBlack w-full text-white ">
       
            <Link href='/' className="row-start-1 row-end-2 xl:col-start-1 xl:col-end-2 "><span ><ArrowLeftIcon className="w-12 h-12 text-white"/> </span></Link>

          <div className="flex flex-col text-center items-center justify-center gap-4 row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 xl:col-start-1 xl:col-end-4 " >
              <h1 className="text-3xl xl:text-5xl font-semibold">scheduled clean: get a quote now</h1>
              <h3>check out our availability and book the date and time that works for you</h3>
          </div>
  
  
        <div className=" row-start-3 row-end-6 xl:row-start-2 grid grid-rows-3 gap-y-8 place-items-center xl:place-items-stretch  xl:grid-rows-none xl:col-span-3 xl:grid-cols-3  xl:gap-y-0 xl:gap-x-8  ">
        <Calendar className="bg-white rounded-lg place-self-stretch"   minDate={yesterday} disabledWeekends={true}   onChange={(e)=> {setDate(e?.toDateString())}} size="lg" shadow='xl'/>
          
          <div className="grid grid-cols-4 justify-center items-start h-fit gap-4">
          {mapTimes.length == 0 ?  <h3 className="w-full row-span-full col-span-full text-center text-white text-xl xl:text-lg">No booking times available, please select a future date.</h3> : 
          
          mapTimes.map((time,key)=> {
              return (
                  <TimeComponent key={key} t={time}/>
              )
              }) }
          
          
          </div>
  
          <div className="flex flex-col items-start justify-between ">
          <div className="flex flex-col justify-start items-center text-center xl:text-left xl:items-start  gap-4 w-full h-full">
          <p className="font-semibold text-2xl">schedule our meeting </p>
          <p className="font-semibold text-2xl">date:   
           <motion.span layoutId="dateAndTime" className="text-xl text-brightOrange "> {date} at {time}</motion.span>
          </p>
          </div>
  
       <button onClick={()=>{(date && time) ? setForm(!form) : toast.error("please pick a date and time") }}  className="self-center  xl:self-end  p-4  "><ArrowRightIcon className="text-white h-12  w-12"  /></button>
         
          </div>
        </div>
              </div>  
          
          }     
       
      
            </>
            

           

     );
}
 
export default CalendarPage;