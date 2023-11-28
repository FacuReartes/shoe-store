import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Collections from './components/Collections';
import img from './img'
import 'boxicons'
import Trending from './components/Trending';
import About from './components/About';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {

  const collectionsRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleCollectionsClick = () => {
    collectionsRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  const handleProductsClick = () => {
    productsRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div className="App bg-gray-50 font-roboto">
      {/* Header */}
      <Header onAboutClick={handleAboutClick} onCollectionsClick={handleCollectionsClick}
      onProductsClick={handleProductsClick} onContactClick={handleContactClick}/>
      {/* Body */}
      <Body/>
      {/* Special Collections */}
      <Collections ref={collectionsRef}/>
      {/* Trending Sneakers */}
      <Trending ref={productsRef}/>
      {/* About us */}
      <About img1={img.aboutImg} img2={img.streetImg} ref={aboutRef}/>
      {/* Footer */}
      <Footer ref={contactRef}/>
    </div>
  );
}

export default App;
