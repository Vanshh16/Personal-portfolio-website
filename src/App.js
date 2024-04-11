import "./App.css";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavigationBar/NavBar";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Technology from "./components/Technology/Technology";
import POR from "./components/POR/POR";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Banner />
          <Skills />
          <Technology />
          <Education />
          <POR />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
