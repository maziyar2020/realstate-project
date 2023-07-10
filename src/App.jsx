// components
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStart from "./components/getstart/GetStart";
import Footer from './components/footer/Footer'

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
        <Value />
        <Contact />
        <GetStart/>
        <Footer />
    </div>
  );
}

export default App;
