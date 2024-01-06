'use client';
import Link from "next/link";
import { useState } from "react";
const Contact = () => {
    const [calendar,setCalendar ] = useState<boolean>(false)
    return (
        <div id="contact" className="grid grid-rows-5 lg:h-screen min-h-screen place-items-center bg-greyBlack text-white w-full">

        <div className="row-start-1 row-end-2 col-start-1 col-end-2 border-b-2 border-b-gray-400 h-full w-full"></div>
        <div className="flex flex-col items-start justify-center lg:w-3/4  row-start-1 row-end-2 col-start-1 col-end-2 ">
        <div className="flex items-center justify-center gap-4 "><span>(04)</span> <p>get in touch</p></div>
        <h3 className="text-7xl">contact</h3>
        </div>

        <div className="row-start-2 row-end-6 flex flex-col lg:flex-row justify-around items-center  w-4/5 h-full ">
        <div className="flex flex-col items-center lg:items-start justify-start gap-12 text-3xl text-center lg:text-left">
            <h3>123 Diamond Lane </h3>
            <h3>Marlboro, New Jersey</h3>
            <h3>000-000-0000</h3>
            <h3>harrypotter@gmail.com</h3>
        </div>
        <Link href='/contact'> <div className="rounded-full w-48 h-48 lg:w-96 lg:h-96 bg-gray-400 flex items-center justify-center">
     <p>get a quote</p>
        </div>
        </Link>

        </div>

        </div>
    )
}
export default Contact