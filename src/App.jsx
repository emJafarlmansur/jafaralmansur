import Hero from "./components/Hero"
import Nav from "./components/Nav"
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-indigo-700 selection:text-indigo-300">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

        <div className="container mx-auto px-8">
        <Nav/>
        <Hero/>
        <About/>
        <Tech/>
        <Experience/>
        <Project/>
        <Contact/>
        </div>
    </div>
  );
};

export default App