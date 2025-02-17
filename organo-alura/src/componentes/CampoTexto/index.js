import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`;

    // const [valor, setValor] = useState('Matheus Lima')

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label> 
                {props.label} 
            </label>

            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={placeholderModificado}
            />
        </div>
    )
}

export default CampoTexto