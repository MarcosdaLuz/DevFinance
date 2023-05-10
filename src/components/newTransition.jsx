import '../styles/newTransition.css'
import modal from '../scripts/newTransition.js'
export default () =>{
    return(
    <>
        <div className='formFild'>
            <div className='form'>
                <h3>Nova Transação</h3>
            
                <form action="">
                    <div>
                    </div>
                    <div>
                        <label ></label>
                        <input id='description' type="text"  placeholder='Descrição'/>        
                    </div>
                    <div>
                        <label ></label>
                        <input  id='amount' type="number" placeholder='0.00'/>
                        <small>Use o sinal - (negativo) para despesas e . (ponto) para casas
                                decimais</small>
                    </div>
                    <div>
                        <label></label>
                        <input type="date" placeholder='mm/dd/yyyy'/>
                    </div>
                    <div className='buttons'>
                        <a onClick={modal} className='cancela'>Cancela</a>
                        <button className='send'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}