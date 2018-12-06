export const PRODUTOS = [
  { nome: 'Feijão', valor: 3.45 },
  { nome: 'Arroz', valor: 1.37 },
  { nome: 'Macarrão', valor: 1.82 },
];

export const FORMAS = [
  { nome: 'Boleto (10%)', valor: 0.10 },
  { nome: 'Cartão (5%)', valor: 0.05 }
];

export class Pedido {
  constructor(public Produto: number,
              public quantidade: number,
              public Forma: number) {}

  get produto() {
    return PRODUTOS[this.produto];
  }

  get forma() {
    return FORMAS[this.forma];
  }

  get total(): number {
    const valor = this.quantidade
      * this.produto.valor;
    return valor * (1 - this.forma.valor);
  }
}
