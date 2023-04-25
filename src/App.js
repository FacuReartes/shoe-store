import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Collections from './components/Collections';
import img from './img'
import 'boxicons'
import Trending from './components/Trending';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-50 font-roboto">
      {/* Header */}
      <Header/>
      {/* Body */}
      <Body/>
      {/* Special Collections */}
      <Collections/>
      {/* Trending Sneakers */}
      <Trending/>
      {/* About us */}
      <About img1={img.aboutImg} img2={img.streetImg}/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
