import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Navbar/>
          <Home/>
          <About/>
          <Projects/>
          <Journey/>
          <Hobbies/>
          <Contact/>
        </main>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p> */}
      </header>
    </div>
  );
}

export default App;