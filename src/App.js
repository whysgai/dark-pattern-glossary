import { useState } from "react";
import './styles/App.css';
import Navbar from "./components/Navbar";
import GlossaryHeader from "./components/GlossaryHeader.js";
import GlossaryIndex from './components/GlossaryIndex.js';
import GlossaryPage from './components/GlossaryPage.js';

const App = () => {
  const [activeIndex, setActiveIndex] = useState("Welcome");
  const [processedText, setProcessedText] = useState([]);


  const selectEntry = entry => {
    setActiveIndex(entry);
  }

  const processText = rawText => {
    var newText = rawText.split("\\n ");
    setProcessedText(newText);
  }

  return (
    <div className="App">
      {/* <Navbar/> */}
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
                  processedText={processedText}
                  processText={processText}
                />
                <GlossaryPage
                  activeIndex={activeIndex}
                />
            </div>
            <div className="card-footer">
              <span className="title-font">Created by Will Cohen at Northeastern University - Spring 2021 - <a href="https://wrcohen.com" target="_blank" rel="noopener noreferrer">wrcohen.com</a></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
