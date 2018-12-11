import { Injectable } from '@angular/core';
import { PRODUTOS, FORMAS, Pedido } from '../../shared/model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: Pedido[];

  constructor() {
    this.pedidos = [];
   }

  incluir (pedido: Pedido) {
    this.pedidos.push(pedido);
  }
  consultar (id_pedido: number) {
    return this.pedidos[id_pedido];

  }
  excluir (id_pedido: number){
    this.pedidos.splice(id_pedido,1);
  }

  listar () {
    return this.pedidos;
  }

}
