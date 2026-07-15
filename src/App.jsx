import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Footer = lazy(() => import("./components/Footer"));

function LoadingScreen() {
  return (
    <div className="
    min-h-[50vh]
    bg-black
    text-white
    flex
    flex-col
    items-center
    justify-center
    gap-3
    ">
      <h2 className="
      text-3xl
      font-bold
      text-cyan-400
      ">
        HMM Graphics
      </h2>

      <p className="
      text-gray-400
      animate-pulse
      ">
        Creating Visual Experiences...
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div className="bg-black min-h-screen">

        <Navbar />

        <main>

          <Suspense fallback={<LoadingScreen />}>

            <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/about"
                element={<About />}
              />

            </Routes>

            <Footer />

          </Suspense>

        </main>

        <WhatsAppButton />

      </div>

    </BrowserRouter>
  );
}

export default App;