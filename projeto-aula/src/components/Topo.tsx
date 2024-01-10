import Link from "next/link";

export default function Topo() {
  return (
    <div className="flex justify-between items-center bg-slate-700 h-[64px] p-5">
      <div className="text-white">Logo</div>

      <div>
        <div className="text-2xl text-white font-black">Plataforma Legal</div>
      </div>

      <nav className="text-white flex gap-2">
        <Link
          href={"/"}
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          Home
        </Link>

        <Link
          href={
            {
              pathname: "/cursos/Cursos",
              query: { nome: "Eduardo", curso: "React Next" },
            }
          }
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          Cursos
        </Link>

        <Link
          href={"/teste/Teste"}
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          Teste
        </Link>

        <Link
          href={"/useState/Usestate"}
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          State
        </Link>


        <Link
          href={"/inputs/Inputs"}
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          Inputs
        </Link>

        <Link
          href={"/useEffect/UseEffect"}
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          UseEffect
        </Link>

        <Link
          href={"/filtragem/Filtragem"}
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          Filtragem
        </Link>
      </nav>
    </div>
  );
}
