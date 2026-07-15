import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


function App() {

  return (

    <div className="bg-black min-h-screen">


      <Navbar />


      <main>

        <Hero />

        <About />

        <Services />

        <Portfolio />

        <Contact />

      </main>


      <Footer />


      <WhatsAppButton />


    </div>

  );

}


export default App;