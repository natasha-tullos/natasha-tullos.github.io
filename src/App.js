import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="spacer" id="home">
        &nbsp;
      </div>
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
