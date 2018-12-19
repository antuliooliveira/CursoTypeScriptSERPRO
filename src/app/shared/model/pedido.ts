export const PRODUTOS = [
  { nome: 'feijão', valor: 3.45 },
  { nome: 'arroz', valor: 1.37 },
  { nome: 'macarrão', valor: 1.82 },
];

export const FORMAS = [
  { nome: 'Boleto (10%)', valor: 0.10, desconto: '10%' },
  { nome: 'Cartão (5%)', valor: 0.05, desconto: '5%' }
];

export class Pedido {
  constructor(public id?: number,
              public idxProduto?: number,
              public quantidade?: number,
              public idxForma?: number) {}

  get produto() {
    return PRODUTOS[this.idxProduto];
  }

  get forma() {
    return FORMAS[this.idxForma];
  }

  get total(): number {
    const valor = this.quantidade * this.produto.valor;
    return valor * (1 - this.forma.valor);
  }
}
