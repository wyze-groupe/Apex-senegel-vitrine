import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Formations from "./components/Formations";
import Pourquoi from "./components/Pourquoi";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact"; 

function App() {  
  return (  
    <>  
      <Navbar />  
      <Hero />  
      <Formations />
      <Pourquoi />
      <FAQ />
      <Contact />
    </>  
  );  
}

export default App;