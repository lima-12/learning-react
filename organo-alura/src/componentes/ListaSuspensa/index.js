import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    // console.log(props.itens)

    return (
        <div className="lista-suspensa">
            <label> {props.label} </label>
            <select onChange={e => props.aoAlterado(e.target.value)} required={props.obrigatorio} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa