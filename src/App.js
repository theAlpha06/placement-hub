import "./App.css";
import Navbar from "./components/navbar";
import Hero from './components/hero';
import Content from "./components/content";
import Community from "./components/community";
import Founders from "./components/founders";
import Footer from "./components/footer";

function App() {
  return (
    <>
      {/* <div id="background"></div> */}
      <Navbar />
      <Hero />
      <Content />
      <Community />
      <Founders />
      <Footer />
    </>
  );
}

export default App;
