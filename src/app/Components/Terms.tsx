import { SetStateAction } from "react"
import { XMarkIcon} from "@heroicons/react/24/solid";
const Terms = ({terms,setTerms} : {terms:boolean, setTerms:React.Dispatch<SetStateAction<boolean>>}) => {
   

    return (
        <div className="fixed w-screen h-screen flex items-center justify-center bg-greyBlack text-white top-0 z-50 overflow-y-auto">
        <div className="lg:w-3/5 p-8 flex flex-col items-start justify-start text-white lg:p-0 lg:text-left bg-greyBlack gap-8 overflow-y-scroll max-h-full">
                <div  className="text-white h-12 w-12 cursor-pointer self-center lg:self-end "><XMarkIcon onClick={()=>{setTerms(!terms); document.body.style.overflowY="auto"}}/></div>
                <h1 className="self-center font-bold text-xl underline">General Liability Release of Claims</h1>
            <h3>Effective immediately upon execution, In this case if you are the owner of the home or property manager or whomever this pertains to is responsible to lock away and keep all valuable items away 
                from the Better Home Services staff to protect not only our company but to keep our clients well aware of their belongings. A Better Home Services LLC is not liable for any lost or high valued stolen items as the owner is obligated to keep them away during the time of cleaning.
            </h3>

            <h3>
            In the rare event the owner of the building or home feels that they were unsatisfied with the work of our staff that they had received, they will be subjected to pay 50% of how much the price was agreed upon after an hour of completed work. This measure is taken in order to be able to fulfill the needs of our workers and receive a complete settlement for their labor to be awarded compensation. After an hour and a half has gone by during a cleaning service with Better Home Services the homeowner or whoever signed the release of claims, their behalf is obligated to pay full price of the project.
            </h3>

            <h3>
            Furthermore, this Release shall be binding upon the undersigned, and his respective heirs, executors, administrators, personal representatives, successors and assigns. This Release shall be subject to and governed by the laws of the State of New Jersey
            </h3>
            <h3>
            This Release has been carefully read and fully understood by the undersigned. The terms have been explained to me and I am freely, knowingly and voluntarily entering into this Release.
            </h3>
          
            <h3 className="font-bold text-xl">I understand the measures taken to make sure that my high valuable items are kept in a safe and secure place away from the Better Home Services staff as they are not responsible for lost items</h3>
      
          <h3 className="font-bold text-xl">I have carefully read the terms and conditions of the General liability release of claims</h3>
        
    
            </div>


            

         
            
        </div>  
    )
}
export default Terms