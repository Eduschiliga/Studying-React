import Topo from "@/components/Topo";
import { useEffect, useState } from "react";

/* Chamado toda vez que a página é renderezida */
export default function Useeffect() {
    const [cont, setCont] = useState<number>(0);
    const [aux, setAux] = useState<number>(0);
    
    useEffect(() :any =>  {
        // // variavel não chama renderização de pag
        // ++aux;
        alert("UseEffect disparado!");
        
        

    }, [aux]/** renderizando apenas uma vez com o [] */);

    function add() {
        let c = cont;
        ++c;
        setCont(c);

        let a = aux;
        ++a;
        setAux(a);
    }


    return (
        <div>
            <Topo />
            <div>
                <p>{`Valor de cont: ${cont}`}</p>
                <p>{`Valor de aux: ${aux}`}</p>
                <button onClick={add} className="bg-blue-500 text-white font-bold rounded p-1">Adicionar</button>
            </div>
        </div>
    );
};