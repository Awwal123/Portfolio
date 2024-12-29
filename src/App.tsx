import { useState, useEffect } from "react";
import { Navbar } from "./component/Navbar";
import { GsapAnimation } from "./component/GsapAnimation";
import { Herosection } from "./component/HeroSection";

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      !localStorage.getItem("theme")
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleAnimationComplete = () => {
    setAnimationComplete(true); // Set animationComplete to true when GSAP animation finishes
  };

  return (
    <div className="">
      {!animationComplete && <GsapAnimation onComplete={handleAnimationComplete} />}
      {animationComplete && (
        <>
          <Navbar />
          <Herosection />
        </>
      )}
    </div>
  );
}

export default App;
