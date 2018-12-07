import { PedidoService } from './../shared/services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { PRODUTOS, FORMAS, Pedido } from './../shared/model/pedido';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors} from '@angular/forms';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  form: FormGroup;
  erroQtd = false;


    // tslint:disable-next-line:no-shadowed-variable
  constructor(private formBuilder: FormBuilder, private pedidoService: PedidoService) {}

  ngOnInit() {
   this.form = this.formBuilder.group( {
     produto: null,
     forma: null,
     quantidade: [null, [Validators.required, Validators.minLength(2)]]
   });
  }

  get produtos() {
    return PRODUTOS;
  }

  get formas() {
    return FORMAS;
  }

  listaPedidos (): Pedido[] {
    return this.pedidoService.listar();
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


    this.pedidoService.incluir (pedido);
  }

  getTotal() {
    return this.pedidoService.listar()
      .reduce((acc, cv) => acc + cv.total, 0);
  }

  validarCodigoFactory(max: number) {
    return (c: AbstractControl): ValidationErrors|null => {
        return(+c.value < max) ? null : { vlInvalido: true};
    };
  }
}
