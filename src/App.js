import { useState } from "react";
import './styles/App.css';
import NavBar from './components/Navbar.js';
import GlossaryIndex from './components/GlossaryIndex.js';
import GlossaryPage from './components/GlossaryPage.js';

const App = () => {
  const [activeIndex, setIndex] = useState("Welcome");

  return (
    <div className="App">
      <NavBar/>
      <main className="background">
        <div className="container">
          <div className="card glossary-card">
            <div className="card-header bg-light"><h2>Title</h2></div>
            <div className="glossary-card-body">
                <GlossaryIndex/>
                <GlossaryPage/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
