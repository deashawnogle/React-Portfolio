import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from "react";
import Project from './components/Project';
import Contact from './components/Contact';



function App () {
  const [currentPage, setCurrentPage] = useState("About")
  const renderPage = () => {
    if (currentPage === "About") {
      return  <About />
    }
    else if (currentPage === "Project") {
      return <Project />
    } 
    else if (currentPage === "Contact") {
      return <Contact />
    } else {
      return <About />
    }
  }
  return (
    <>
    <Header setCurrentPage = {setCurrentPage} />
     {renderPage()}
    <Footer />
    </>
  )
}

export default App;
