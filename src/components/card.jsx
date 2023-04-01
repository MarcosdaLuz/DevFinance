import "../styles/card.css"

export default () => {
    return(
        <section>
            <div className="income">
                <h2>Entradas <span><img src="../src/assets/img/income.svg" alt="" /></span></h2>
                <p>R$ 1000,00</p>
            </div>
            <div className="expense">
                <h2>Saidas <span><img src="../src/assets/img/expense.svg" alt="" /></span></h2>
                <p>R$ 1000,00</p>
            </div>
            <div className="total">
                <h2>Total <span><img src="../src/assets/img/total.svg" alt="" /></span></h2>
                <p>R$ 1000,00</p>
            </div>
        </section>
    )
}