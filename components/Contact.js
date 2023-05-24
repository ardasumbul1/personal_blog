
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 

export default function Contact(){
    return(
        <div id="contact" className="p-[10vh] shadow-2xl">
            <div className="text-center text-3xl font-normal">
                <p>Feel free to reach out!</p> 
                <p>Don't hesitate to contact me!</p> 
                <p className="mt-[1vh]">👇</p>
            </div>

           <div className="flex justify-center items-center mt-[4vh]">
                <FontAwesomeIcon className="border border-slate-200 p-[3vh] rounded-full shadow-2xl" icon={faEnvelope} size="2xl" /> 
                <div className="m-[2vh] text-2xl font-normal">
                    <p className="font-semibold">Mail</p>
                    <p>arda.sumbul@ozu.edu.tr</p>
                </div>
           </div>

          
        </div>
    )
}