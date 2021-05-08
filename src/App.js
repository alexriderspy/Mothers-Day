import './App.css'
import Header from './components/Header'
import Gift from './components/Gift'
import Footer from './components/Footer'
import {useState} from 'react'

function App() {
  const [showSlide, setShowSlide]=useState(false)
  return (
    
    <div className="App">
      <Header/>
      <Gift onClick={()=>setShowSlide(!showSlide)} isVisible={showSlide} />
      
      <Footer/>
      </div>
  );
}

export default App;
