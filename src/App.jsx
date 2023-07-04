// components
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
// styles
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
        <Companies />
        <Residencies />
    </div>
  );
}

export default App;
