import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Content from './Content'
import Section from './Section'
import Footer from './Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Content />
        <Section />
        <Footer />
        </div>
    </>
  )
}

export default App
