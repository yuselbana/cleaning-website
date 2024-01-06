import { ArrowLeftIcon,ArrowRightIcon } from "@heroicons/react/24/solid";
import { Input, Select } from "@rewind-ui/core";
import { SetStateAction } from "react";

const Circle = ({title}: {title?:string}) => {
    return (
        <div className="rounded-full h-96 w-96 bg-gray-400 hidden lg:inline col-start-2 col-end-3 row-start-3 row-end-5 justify-self-center self-end ">{title}</div>
    )
}
interface FormProps {
    form:boolean,
    setForm:React.Dispatch<SetStateAction<boolean>>
    date:string |null  |undefined,
    time:string |null  |undefined
}
const Form: React.FunctionComponent<FormProps> = ({form,setForm,date,time}) => {
    return ( 
        <div className="grid grid-cols-1 grid-rows-10 lg:grid-rows-5 lg:grid-cols-2 lg:h-screen min-h-screen w-full bg-greyBlack text-white">
            <div onClick={()=>{setForm(!form)}} className="row-span-1 col-span-1 self-center lg:ml-20 cursor:pointer"> <ArrowLeftIcon className="text-white h-12 w-12"/> </div>
            <div className="row-start-6 row-end-7 lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 self-center flex items-center justify-center"><p>{date} at {time}</p></div>

            <div className="grid grid-rows-4 grid-cols-2 row-start-2 row-end-6 h-full w-full place-items-center text-9xl p-12">
            <h3 className="row-start-1 row-end-1 col-start-1 col-end-2 justify-self-end">lets</h3>
            <h3 className="row-start-2 row-end-3 col-start-2 col-end-3 justify-self-start">get</h3>
            <h3 className="col-start-1 col-end-3 row-start-3 row-end-4  z-10">in touch</h3>
            <Circle/>
            </div>

            <div className="w-full h-full lg:col-start-2 row-start-7 row-end-11 lg:row-start-2 lg:row-end-6  text-gray-400 p-4 lg:p-12 grid place-items-center">
                <form className="grid grid-rows-6  h-full  lg:w-3/4 place-items-center ">
                    <Input type="text" required placeholder="full name" tone={"transparent"} withRing={false} className="rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                    <div className="w-full flex justify-between items-center">
                    <Input type="email" required placeholder="email" tone={"transparent"} withRing={false} className=" w-[45%] rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                    <Input type="number" maxLength={10} required placeholder="phone number" tone={"transparent"} withRing={false} className=" w-[45%] rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                    </div>
                    <Input type="text" required placeholder="address" tone={"transparent"} withRing={false} className="rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                    <Select  required tone={"transparent"} withRing={false} className="border-gray-400 border-2 text-white  ">
                        <option className="bg-greyBlack " value="" disabled selected>select your service</option>
                        <option className="bg-greyBlack">regular cleaning</option>
                        <option className="bg-greyBlack">carpet/steam cleaning</option>
                        <option className="bg-greyBlack">deep cleaning</option>
                        <option className="bg-greyBlack">garage cleaning</option>
                        <option className="bg-greyBlack">miscellaneous</option>
                    </Select>
                     <Input required placeholder="message" tone={"transparent"} withRing={false} className="rounded-none border-x-0 border-t-0 border-b-2 border-gray-400 text-white" />
                     <button className="justify-self-end"><ArrowRightIcon className="text-white h-12 w-12"/></button>
                </form>
            </div>

        </div>

     );
}
 
export default Form;