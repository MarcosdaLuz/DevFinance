import { useState } from 'react'
import './styles/App.css'
import Card from './components/card'
import Nav from './components/nav'
import Table from './components/table'
import Footer from './components/footer'
import NovaTrasacao  from './components/newTransition'
import modal from './scripts/newTransition.js'
export default () => {
return(
  <>
    <header>
      <Nav/>
    </header>
    <main>    
      <Card/>
      <h3 onClick={modal}>+ Nova Transação</h3>
      <div id='scroll'>
        <Table/>
      </div> 
      <NovaTrasacao/>
    </main>
    
    <footer>
      <Footer/>
    </footer>
  </>
)
  
}

