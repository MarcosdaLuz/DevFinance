import { useState } from 'react'
import './styles/App.css'
import Card from './components/card'
import Nav from './components/nav'
import Table from './components/table'
import Footer from './components/footer'
export default () => {
return(
  <>
    <header>
      <Nav/>
    </header>
    <main>    
      <Card/>
      <div id='scroll'>
        <Table/>
      </div> 
    </main>
    <footer>
      <Footer/>
    </footer>
  </>
)
  
}

