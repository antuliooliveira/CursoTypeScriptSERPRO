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

  listar () {
    return this.pedidos;
  }

}
