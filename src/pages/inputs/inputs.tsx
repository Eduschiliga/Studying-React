import Topo from "@/components/Topo"
import { useState } from "react"

export default function Inputs() {
    const cursos = ["Administrador", "Usuário", "Membro"]

    const [nome, setNome] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [user, setUser] = useState<string>("");

    function selecionarUser() {
        return cursos.map((c: string) => {
            return (
                <option value={c}>{c}</option>
            );
        })
    }

    return (
        <>
            <Topo />
            <div className="flex flex-col items-center justify-center">
                <form action="" className="flex flex-col gap-3 items-center justify-center m-5">
                    <div>
                        <label htmlFor="nome" className="font-bold mr-2">Nome:</label>
                        <input type="text" name="nome" id="nome" value={nome} onChange={(evt) => setNome(evt.target.value)} className="bg-slate-100 rounded shadow-sm" />
                    </div>

                    <div>
                        <label htmlFor="nome" className="font-bold mr-2">Senha:</label>
                        <input type="password" name="senha" id="senha" value={senha} onChange={(evt) => setSenha(evt.target.value)} className="bg-slate-100 rounded shadow-sm" />
                    </div>

                    <div>
                        <label htmlFor="usuario" className="font-bold mr-2">Tipo de usuário:</label>
                        <select name="usuario" id="usuario" value={user} onChange={(evt) => setUser(evt.target.value)} className="bg-slate-100 rounded shadow-sm">
                            <option value="" selected disabled>Selecione...</option>
                            {selecionarUser()}
                        </select>
                    </div>
                </form>

                <div className="flex justify-center items-center flex-col bg-slate-50 p-3 rounded-lg shadow-md">
                    <h1 className="text-xl m-1 font-bold">Informações inseridas</h1>
                    <div>Nome: {nome}</div>
                    <div>Senha: {senha}</div>
                    <div>Tipo de usuário: {user}</div>
                </div>
            </div>
        </>
    )
}