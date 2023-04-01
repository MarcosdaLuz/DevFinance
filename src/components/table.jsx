import "../styles/table.css"
export default () => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th colSpan={2}>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Luz</td>
                    <td>R$ 2000,00</td>
                    <td>12/04/2000</td>
                    <td><a href="#"><img src="../src/assets/img/minus.svg" alt="" /></a></td>
                </tr>
            </tbody>
        </table>
    )
}