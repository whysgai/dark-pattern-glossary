import { useState } from "react";
import './styles/App.css';
import Navbar from "./components/Navbar";
import GlossaryHeader from "./components/GlossaryHeader.js";
import GlossaryIndex from './components/GlossaryIndex.js';
import GlossaryPage from './components/GlossaryPage.js';

const App = () => {
  const [activeIndex, setActiveIndex] = useState("Welcome");


  const selectEntry = entry => {
    console.log("Selected: ", entry);
    setActiveIndex(entry);
  }

  return (
    <div className="App">
      <Navbar/>
      <main className="background">
        <div className="container">
          <div className="card glossary-card">
            <GlossaryHeader
              activeIndex={activeIndex}
              selectEntry={selectEntry}
            />
            <div className="glossary-card-body">
                <GlossaryIndex
                  activeIndex={activeIndex}
                  selectEntry={selectEntry}
                />
                <GlossaryPage
                  activeIndex={activeIndex}
                />
            </div>
            <div className="card-footer">footer</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
