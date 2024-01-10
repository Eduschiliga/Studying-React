import Topo from "@/components/Topo";
import { useState } from "react";

type Carro = {
    id: number;
    categ: "Esporte" | "SUV" | "Utilitario";
    valor: string;
    modelo: string;
}

let carros: Carro[] = [
    { id: 0, categ: "Esporte", valor: "120000.00", modelo: "Golf GTI" },
    { id: 1, categ: "Esporte", valor: "200000.00", modelo: "Camaro" },
    { id: 2, categ: "SUV", valor: "100000.00", modelo: "HRV" },
    { id: 3, categ: "SUV", valor: "100000.00", modelo: "Hillux" },
    { id: 4, categ: "Utilitario", valor: "180000.00", modelo: "T-Cross" },
    { id: 5, categ: "Utilitario", valor: "180000.00", modelo: "Ranger" },
]

export default function Filtragem() {
    const [categ, setCateg] = useState("");
    const [linhas, setLinhas] = useState<any[]>([]);

    function criarLinhas(cat: Carro["categ"]) {
        setCateg(cat);
        let l: any[] = [];
        carros.forEach((car: any) => {
            if(car.categ == cat) {
                l.push(
                    <div className="flex flex-row w-[500px]" key={car.id}>
                        <div className="w-full">{car.categ}</div>
                        <div className="w-full">{car.valor}</div>
                        <div className="w-full">{car.modelo}</div>
                    </div>
                )
            }
        })
        setLinhas(l);
    }

    return (
        <div>
            <Topo />

            <form action="">
                <label htmlFor="categoria">Selecione a categoria</label>
                <select name="categoria" id="categoria" value={categ} onChange={(evt) => { criarLinhas(evt.target.value as "Esporte" | "SUV" | "Utilitario") }}>
                    <option value="">Nenhum</option>
                    <option value="Esporte">Esporte</option>
                    <option value="SUV">SUV</option>
                    <option value="Utilitario">Utilitario</option>
                </select>
            </form>

            <div className="flex flex-col">
                <div className="flex flex-row w-[500px]">
                    <div className="w-full font-bold">Categoria</div>
                    <div className="w-full font-bold">Valor</div>
                    <div className="w-full font-bold">Modelo</div>
                </div>
                {linhas}
            </div>

        </div>
    );
};