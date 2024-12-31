import gsap from "gsap";
import { useEffect } from "react";
import { LoadingPage } from "./LoadingPage";

interface GsapAnimationProps {
  onComplete: () => void;
}

export const GsapAnimation: React.FC<GsapAnimationProps> = ({ onComplete }) => {
  useEffect(() => {
    let tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete(); 
        }
      },
    });

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
      },
    });

    tl.to(".container", {
      rotate: "-405deg",
      scale: 0,
      duration: 1,
    });

    tl.to(".wrapper", {
      opacity: 0,
      display: "none",
    });

    return () => {
      tl.kill(); 
    };
  }, [onComplete]);

  return (
    <>
      <LoadingPage />
      <div className="h-screen absolute z-50 flex overflow-hidden items-center justify-center">
        {/* Additional content can go here */}
      </div>
    </>
  );
};
