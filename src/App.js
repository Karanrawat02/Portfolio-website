import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutMe from "./components/Aboutme";
import CardGrid from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <CardGrid />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
