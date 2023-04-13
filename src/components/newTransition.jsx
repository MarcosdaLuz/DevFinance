import '../styles/newTransition.css'
export default () =>{
    return(
    <>
        <h3 >+ Nova Transação</h3>
        <div className='form'>
            <h3>Nova Transação</h3>
            <form action="">
                <div>
                </div>
                <div>
                    <label htmlFor="description"></label>
                    <input id='description' type="text"  placeholder='Descrição'/>        
                </div>
                <div>
                    <label htmlFor='amount'></label>
                    <input  id='amount' type="number" placeholder='0.00'/>
                    <small>Use o sinal - (negativo) para despesas e . (ponto) para casas
                            decimais</small>
                </div>
                <div>
                    <label htmlfor="data"></label>
                    <input type="date" placeholder='mm/dd/yyyy'/>
                </div>
                <div className='buttons'>
                    <a href="" className='cancela'>Cancela</a>
                    <button className='send'>Enviar</button>
                </div>

            </form>
        </div>
    </>
    )
}