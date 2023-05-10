import Card from '../components/card';
import Table from '../components/table';
import NovaTrasacao from '../components/newTransition'
import modal from '../scripts/newTransition.js'
export default ()=>{
    return(
        <main>    
        <Card/>
        <h3 onClick={modal}>+ Nova Transação</h3>
        <div id='scroll'>
          <Table/>
        </div> 
        <NovaTrasacao/>
      </main>
    )
}