import { Suspense } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import OurService from './component/OurService';
import Search from './component/Search';


function App() {
  return (
    <>
    <Suspense fallback={null}>
      <Navbar/>
      <Search/>
      <OurService/>
      <Footer/>
    </Suspense>
    
    </>
  );
}

export default App;
