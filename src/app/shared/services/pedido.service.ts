import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUTOS, FORMAS, Pedido } from '../../shared/model/pedido';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  incluir (pedido: Pedido) {
    return this.http.post ('http://localhost:3000/api/pedidos/', pedido, {observe: 'response', responseType: 'text'});
  }
  consultar (id_pedido: number): Observable<Pedido> {
    return this.http.get<Pedido>('http://localhost:3000/api/pedidos/' + id_pedido).pipe(
      map(e => Object.assign(new Pedido(), e))
    );

  }
  excluir (id_pedido: number) {
    return this.http.delete ('http://localhost:3000/api/pedidos/' + id_pedido, {observe: 'response', responseType: 'text'});
  }

  listar (): Observable<Pedido[]> {
    return this.http.get<Pedido[]>('http://localhost:3000/api/pedidos').pipe(
      map(pedidos => pedidos.map(e => Object.assign(new Pedido(), e)))
    );
  }


}
