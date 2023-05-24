import styles from "../styles/Portfolio.module.css"


export default function(){
    return(
        <div id="projects" className={styles.cardContainer}>
            <h1 className="text-center mb-[5vh] text-5xl font-semibold">Portfolio</h1>
            <div className={styles.card} >
                <div className={styles.container}>
                    <img className={styles.imageL} src="/car-rental.png" alt="car-rental" />
                    <div className=" lg:p-[3vh] p-[2vh] ">
                        <h1 className={styles.heading}>Carlaa</h1>
                        <p className="text-l text-slate-500">A car rental website serves as a virtual platform where individuals or businesses can access and book rental vehicles for their specific needs. This online platform offers users a convenient way to search, evaluate, and secure car rentals through an intuitive interface.</p>
                        <div className={styles.techContainer}>
                            <h1 className={styles.tech}>Nextjs</h1>
                            <h1 className={styles.tech}>Tailwindcss</h1>
                        </div>
                        <div className={styles.github}>
                            <a href="https://github.com/ardasumbul1/Car-rental-app"><img  className="pr-[1vh]" src="/github-logo.png" alt="" /></a>
                            <p className="text-l font-semibold">Code</p>
                        </div>
                    </div>
                </div>
   
            </div>
            <div className={styles.card} >
                <div className={styles.container}>
                    <div className=" lg:p-[3vh]  p-[2vh]">
                        <h1 className={styles.heading}>Nextflix</h1>
                        <p className="text-l text-slate-500">Nextflix is a simple movie showroom that fetches movie data from The Movies Database API. Users can search for movies in various genres and have detailed information about the film.</p>
                        <div className={styles.techContainer}>
                            <h1 className={styles.tech}>Nextjs</h1>
                            <h1 className={styles.tech}>Tailwindcss</h1>
                        </div>
                        <div className={styles.github}>
                            <a href="https://github.com/ardasumbul1/TechCareerNet-Bootcamp-Project"><img  className="pr-[1vh]" src="/github-logo.png" alt="" /></a>
                            <p className="text-l font-semibold">Code</p>
                        </div>
                    </div>
                    <img className={styles.imageR} src="/Nextflix.png" alt="car-rental" />

                </div>
            </div>
            <div className={styles.card} >
                <div className={styles.container}>
                    <img className={styles.imageL} src="/cryptomarket1.png" alt="car-rental" />
                    <div className="  p-[3vh] ">
                        <h1 className={styles.heading}>Crypto Bazaar</h1>
                        <p className="text-l text-slate-500">Crypto Bazaar is a cryptocurrency application that empowers users to access real-time data and insights on a wide range of digital currencies. With this app, individuals can effortlessly explore and retrieve information about different cryptocurrencies, all at their fingertips.</p>
                        <div className={styles.techContainer}>
                            <h1 className={styles.tech}>Nextjs</h1>
                            <h1 className={styles.tech}>Tailwindcss</h1>
                        </div>
                        <div className={styles.github}>
                            <a href="https://github.com/ardasumbul1/crypto-market-place"><img  className="pr-[1vh] pl-[1vh]" src="/github-logo.png" alt="" /></a>
                            <p className="text-l font-semibold">Code</p>
                            <a href="https://crypto-bazaar.vercel.app/"><img  className="pr-[1vh] pl-[1vh] w-[60px]" src="/live.png" alt="" /></a>
                            <p className="text-l font-semibold">Live Demo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}