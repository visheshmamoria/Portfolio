import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";


function App() {
  

  return (
    <>

<div class="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className = "flex flex-col itmes-center px-4 md:px-8 lg:px-16">
        <Navbar/>
        <Hero/>
        <Projects/>
        <Tech/>
        <Contact/>
      </main>
    </>
  );
}

export default App
