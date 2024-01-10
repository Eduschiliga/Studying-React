export interface CardProps {
    curso: string,
    valor: number,
    desconto: number,
    funcao: (valor: number, desconto: number) => string,
    children?: React.ReactNode;
  
  }