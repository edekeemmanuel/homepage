import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./pages/About";
import Store from "./pages/Store";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import Profile from "./pages/Profile";
import Application from "./pages/Sidehustleapps";
import { Routes, Route } from 'react-router-dom';
import Mic from "./pages/Mic";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/gmail' element={<Gmail/>} />
        <Route path='/images' element={<Images/>} />
        <Route path='/application' element={<Application/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/mic' element={<Mic/>} />
      </Routes>
           
     
    </>
  );
}

export default App;
