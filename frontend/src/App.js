import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import TestProject from './components/TestProject';
import Journey from './components/Journey';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
        <main>
          <Navbar/>
          <Home/>
          <About/>
          <Projects/>
          <TestProject/>
          <Journey/>
          <Hobbies/>
          <Contact/>
        </main>
  );
}

export default App;