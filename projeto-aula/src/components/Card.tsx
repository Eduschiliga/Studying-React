import React from "react";
import { CardProps } from "@/interfaces/CardProps";

export default function Card(props: CardProps) {
  return (
    <div
      className={`bg-slate-400 m-3 p-2 rounded shadow-2xl ${
        props.desconto > 0 ? "border-green-400" : "border-red-500"
      }  border-4 w-[250px]`}
    >
      <div className="bg-slate-700 text-white p-3 rounded-sm font-bold text-center">
        <h1 className="text-2xl mt-3 mb-3">Curso de {props.curso}</h1>
        <p>
          Valor:<span className="text-red-500"> R$ {props.valor}</span>
        </p>

        {props.desconto > 0 && (
          <div>
            <p>
              Desconto:{" "}
              <span className="text-yellow-300">
                {(props.desconto ? props.desconto : 0).toFixed(2)}%
              </span>
            </p>
            <p>
              Valor com desconto:{" "}
              <span className="text-green-500">
                R$ {props.funcao(props.valor, props.desconto)}
              </span>
            </p>
          </div>
        )}
      </div>

      <p className="text-center m-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores quo.
      </p>

      <div>
        {props.children}
      </div>
    </div>
  );
}

// export default function Card(props: any) {
//     return (
//         <div style={testecss} className="flex-col rounded-md m-4 p-1 bg-slate-400">
//         <h1 className="subtituloTopo">Curso de {props.curso} - R$ {props.valor}</h1>
//         <p style={{color: '#00f', backgroundColor: '#dee', padding: '8px', borderRadius: '5px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda dolores minima quos animi qui debitis, nulla aperiam asperiores in fugiat porro laboriosam mollitia corrupti necessitatibus autem veniam laudantium. Unde, accusamus.</p>
//       </div>
//     );
// };

// const testecss = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItens: 'center',
//     color: '#00f',
//     fontSize: '20px',
// };
