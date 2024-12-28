import { Navbar } from "./component/Navbar";

import { Home } from "./component/Home";
import { Herosection } from "./component/HeroSection";

function App() {

  if (localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme')) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  return (
    <div className="">
     <Navbar />
     <Herosection />
     <Home />
    </div>
  );
}

export default App;
