import { Component, OnInit } from '@angular/core';
import { PRODUTOS, FORMAS, Pedido } from './../shared/model/pedido';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  //form = new FormGroup({
   // produto: new FormControl(),
  //  forma: new FormControl(),
   // quantidade: new FormControl()
  //});
  form: FormGroup;
  erroQtd = false;

  pedidos: Pedido[];

  //constructor() { }
  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.pedidos = [];
   this.form = this.formBuilder.group( {
     produto: null,
     forma: null,
     quantidade:[null, [Validators.required, Validators.minLength(2)]]
   });
  }

  get produtos() {
    return PRODUTOS;
  }

  get formas() {
    return FORMAS;
  }

  incluir() {

    if (!this.form.valid) {
      this.erroQtd = true;
      return;
      // throw new Error('Method not implemented.');
    } else {
      this.erroQtd = false;
    }


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
