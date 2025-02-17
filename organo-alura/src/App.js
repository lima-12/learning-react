import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import {useState} from "react";
// import CampoTexto from './componentes/CampoTexto';

function App() {

    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(colaboradores);
        setColaboradores([...colaboradores, colaborador]);
    }

    return (
        <div className="App">

        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

        </div>
    );
}

export default App;
