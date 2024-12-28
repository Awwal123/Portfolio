import { LoadingPage } from "./LoadingPage"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export const Home = () => {
    useGSAP(()=> {
        let tl = gsap.timeline();
        

        tl.to(".box", {
            scale: 0,
            y: 60,
            rotate: 400,
            duration: 1,
            repeat: 1,
            yoyo: true,
            delay: 0.5,
            stagger: {
                amount: 1.5,
                from: 0,
                grid: [3, 3],
            }
        });

        tl.to (".container", {
            rotate: "-405deg",
            scale: 0,
            duration: 1,
        });

        tl.to(".wrapper", {
            opacity: 0,
            display: "none",
        })
    })
    return (
        <>
        <LoadingPage />
        <div className="h-screen bg-black flex items-center justify-center">
            <h1 className="text-white  text-8xl font-bold" >Welcome</h1>
        </div>
        </>
    )
}