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
              pathname: "/cursos/cursos",
              query: { nome: "Eduardo", curso: "React Next" },
            }
          }
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          Cursos
        </Link>

        <Link
          href={"/teste/teste"}
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          Teste
        </Link>

        <Link
          href={"/useState/usestate"}
          className="bg-white text-blue-600 p-1 rounded font-bold shadow-sm hover:bg-slate-200"
        >
          State
        </Link>


        <Link
          href={"/inputs/inputs"}
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
      </nav>
    </div>
  );
}
