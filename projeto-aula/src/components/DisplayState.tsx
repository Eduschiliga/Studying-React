import { DisplayStateProps } from "@/interfaces/DisplayStateProps";

export default function DisplayState({ valor, fvalor }: DisplayStateProps) {
    function operacao(op: number): void {
        let c = valor;
        c += op;
        c >= 0 && fvalor(c);
    }

    return (

        <>
            <div className="bg-slate-100 w-[fit-content] flex justify-center items-center gap-2 p-3 rounded shadow-sm font-bold">
                <button onClick={() => operacao(-1)} className="bg-blue-500 p-1 rounded-md text-white font-bold w-7">-</button>

                {' ' + valor + ' '}

                <button onClick={() => operacao(1)} className="bg-blue-500 p-1 rounded-md text-white font-bold w-7">+</button>
            </div>

        </>
    );
};