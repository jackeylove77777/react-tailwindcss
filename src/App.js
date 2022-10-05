import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Support></Support>
      <AllInOne></AllInOne>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
}

export default App;
