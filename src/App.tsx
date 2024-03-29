import Navbar from "../src/scenes/navbar/";
import Home from "../src/scenes/home";
import Benefits from "../src/scenes/benefits";
import OurClasses from "../src/scenes/ourClasses";
import ContactUs from "../src/scenes/contactUs";
import Footer from "../src/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "../src/shared/types";
Navbar


function App() {
 const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
const [isTopOfPage, setIsTopOfpage] = useState<boolean>(true);

useEffect(()=>{
  const handleScroll = ()=>{
    if(window.scrollY === 0){
setIsTopOfpage(true);
setSelectedPage(SelectedPage.Home);
    }
    if(window.scrollY !== 0){
      setIsTopOfpage(false);
    }
  }
  window.addEventListener("scroll", handleScroll);
  return ()=> window.removeEventListener("scroll", handleScroll);
}, [])
  return (
 <div className="app bg-gray-20">
<Navbar
isTopOfPage={isTopOfPage}
selectedPage={selectedPage}
setSelectedPage={setSelectedPage}
/>
<Home setSelectedPage={setSelectedPage}/>
<Benefits setSelectedPage={setSelectedPage}/>
<OurClasses setSelectedPage={setSelectedPage} />
<ContactUs setSelectedPage={setSelectedPage}/>
<Footer/>
 </div>
  )
}

export default App
