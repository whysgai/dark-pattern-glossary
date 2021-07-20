import logo from './logo.svg';
import './styles/App.css';
import NavBar from './components/Navbar.js';
import Glossary from './components/Glossary.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="background">
        <div className="container">
          <Glossary/>
        </div>
      </main>
    </div>
  );
}

export default App;
