
export default function About(){
    return(
        <div id="about" className="">
            <div className="lg:flex justify-center items-center pt-[8vh] pb-[8vh] shadow-2xl ">
                <div>
                    <img className="lg:w-[500px] lg:h-[400px]" src="/computer.jpg" alt="" /> 
                </div>
                <div className=" lg:w-[500px] p-[2vh]">
                    <p className="text-2xl font-bold mb-[2vh]">About Me</p>
                    <p className="text-l text-slate-400">As a Junior Front-End Developer, I have a strong skill set in HTML, CSS, JavaScript, React, and Tailwind. I have a knack for creating and managing websites that adapt well to different screen sizes, providing users with a seamless and enjoyable experience. My proficiency lies in developing interactive and visually appealing interfaces using efficient and well-structured code. I stay updated with the latest advancements in web development tools and methodologies, allowing me to leverage modern techniques to deliver exceptional results. Additionally, I value teamwork and find fulfillment in working alongside diverse teams to deliver exceptional web applications.</p>
                </div>
            </div>
        </div>

    )
}