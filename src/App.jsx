import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { Body } from './components/body/body'
import { Footer } from './components/footer/footer'

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    
    <div className="container">
      <Header setActivePage={setActivePage} />
      <Body activePage={activePage} />
      <Footer/>
    </div>
    
      
    
  )
}

export default App
