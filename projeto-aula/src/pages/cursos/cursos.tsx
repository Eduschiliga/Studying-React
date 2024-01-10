import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";

export default function Cursos() {
  const router = useRouter();
  const parametros = router.query;
  const { nome, curso } = router.query;

  const cursos = [
    {
      id: 1,
      curso: "React",
      valor: 29.99,
      desconto: 0,
      disponivel: true,
    },
    {
      id: 2,
      curso: "TypeScript",
      valor: 35.0,
      desconto: 25,
      disponivel: true,
    },
    {
      id: 3,
      curso: "MySQL",
      valor: 49.99,
      desconto: 15,
      disponivel: true,
    },
    {
      id: 4,
      curso: "JavaScript",
      valor: 19.99,
      desconto: 27,
      disponivel: false,
    },
    {
      id: 5,
      curso: "PostgreSQL",
      valor: 55.0,
      desconto: 32,
      disponivel: false,
    },
    {
      id: 6,
      curso: "HTML / CSS",
      valor: 69.99,
      desconto: 10,
      disponivel: true,
    },
  ];

  function calcularDesconto(valor: number, desconto: number): string {
    return (valor - ((desconto ? desconto : 0) / 100) * valor).toFixed(2);
  }

  function calcularDescontoComTaxa(valor: number, desconto: number): string {
    return (valor - (((desconto ? desconto : 0) / 100) * valor) / 2).toFixed(2);
  }

  return (
    <>
      <Topo />

      <div className="flex flex-wrap items-baseline justify-center">
        {cursos.map((el: any) => {
          if (el.disponivel) {
            return (
              <Card
                key={el.id}
                curso={el.curso}
                valor={el.valor}
                desconto={el.desconto}
                funcao={
                  el.desconto > 25 ? calcularDesconto : calcularDescontoComTaxa
                }
              >
                <div className="text-center">
                  <p className="text-lg text-white">Curso muito bom!! :D</p>
                  <p className="text-yellow-300">* * * * *</p>
                </div>
              </Card>
            );
          }
        })}
      </div>
    </>
  );
}
