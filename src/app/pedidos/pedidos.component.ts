import { Component, OnInit } from '@angular/core';
import { PRODUTOS, FORMAS, Pedido } from './../shared/model/pedido';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  form = new FormGroup({
    produto: new FormControl(),
    forma: new FormControl(),
    quantidade: new FormControl()
  });

  pedidos: Pedido[];

  constructor() { }

  ngOnInit() {
    this.pedidos = [];
  }

  get produtos() {
    return PRODUTOS;
  }

  get formas() {
    return FORMAS;
  }

  incluir() {

    const pedido = new Pedido(
      this.form.value.produto,
      this.form.value.quantidade,
      this.form.value.forma
      );

    this.pedidos.push(pedido);
  }

  getTotal() {
    return this.pedidos
      .reduce((acc, cv) => acc + cv.total, 0);
  }
}
