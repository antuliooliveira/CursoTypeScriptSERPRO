import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUTOS, FORMAS, Pedido } from '../../shared/model/pedido';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: Pedido[];

  constructor(private http: HttpClient) {
        this.pedidos = [];
   }

  incluir (pedido: Pedido) {
    this.pedidos.push(pedido);
  }
  consultar (id_pedido: number): Observable<Pedido> {
    return this.http.get<Pedido>('http://localhost:3000/api/pedidos/' + id_pedido).pipe(
      map(e => Object.assign(new Pedido(), e))
    );

  }
  excluir (id_pedido: number) {
    this.pedidos.splice(id_pedido, 1);
  }

  listar (): Observable<Pedido[]> {
    return this.http.get<Pedido[]>('http://localhost:3000/api/pedidos').pipe(
      map(pedidos => pedidos.map(e => Object.assign(new Pedido(), e)))
    );
  }


}
