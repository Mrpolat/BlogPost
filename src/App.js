import Header from './components/Header/index';
import './App.css';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import Write from './pages/Write/index';
import BlogNews from './pages/BlogNews/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />    
        <Route path='/about' element={<About/>} />   
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/write' element={<Write/>} />     
        <Route path='/blogNews' element={<BlogNews/>} />    
      </Routes>
      </Router>
    </div>
  );
}

export default App;
