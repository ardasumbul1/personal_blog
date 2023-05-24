import styles from "../styles/Landing.module.css"

export default function Landing(){
    return(
        <div className="p-[15vh] shadow-2xl bg-slate-100">
            <div className="lg:flex justify-center">
                <div className="lg:flex justify-center items-center">
                    <div>
                        <h1 className="text-5xl font-bold mb-[2vh]">Junior Frontend Developer</h1>
                        <p className="text-xl mb-[0.5vh]">Hi, I'm Mehmet Arda Sümbül. </p>
                        <p className="text-xl mb-[0.5vh]"> A passionate Front-end Developer based in İzmir, Turkey. 📍</p>
                        <p className="text-xl mb-[0.5vh]">Trying to be full-stack.</p>
                    </div>
                </div>
                <div>
                    <img className="lg:w-[400px] w-[200px]" src="/avatar.png" alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-[5vh]">
                <p className="font-bold lg:text-2xl pr-[1vh] lg:pr-[5vh]">Tech Stack</p>

                <div className="border-l border-1 border-black h-[6vh] mr-[1vh]"></div>
                <div className="flex justify-center">
                    <div className={styles.techDiv}>
                    <img className={styles.tech} src="/html5.svg" alt="" />
                    </div>
                    <div className={styles.techDiv}>
                    <img className={styles.tech}src="/css3.svg" alt="" />
                    </div>
                    <div className={styles.techDiv}>
                    <img className={styles.tech} src="/javascript.svg" alt="" />
                    </div>
                    <div className={styles.techDiv}>
                    <img className={styles.tech}src="/react.svg" alt="" />
                    </div>
                    <div className={styles.techDiv}>
                    <img className={styles.tech} src="/tailwind-css-icon.svg" alt="" />
                    </div>
                    <div className={styles.techDiv}>
                    <img className={styles.tech} src="/nextjs-icon.svg" alt="" />
                    </div>
                </div>
        

            </div>


        </div>
    )
}