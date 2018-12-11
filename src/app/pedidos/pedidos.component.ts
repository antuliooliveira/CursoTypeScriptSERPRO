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
  pedido: Pedido[];


    // tslint:disable-next-line:no-shadowed-variable
  constructor(private formBuilder: FormBuilder, private pedidoService: PedidoService) {}

  ngOnInit() {
   this.form = this.formBuilder.group( {
     idxProduto: null,
     idxForma: null,
     quantidade: [null, [Validators.required, Validators.minLength(2)]]
   });

   this.pedidoService.listar().subscribe(value => {
    this.pedido = value;
    },
    error => {
    alert('Erro do servidor durante a consulta de cursos!');
    });

  }

  get produtos() {
    return PRODUTOS;
  }

  get formas() {
    return FORMAS;
  }

  listarPedidos (): Pedido[] {
    return this.pedido;
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
      this.form.value.idxProduto,
      this.form.value.quantidade,
      this.form.value.idxForma
      );


    this.pedidoService.incluir (pedido);
    }
    excluir(id_pedido: number) {
      this.pedidoService.excluir(id_pedido);
    }

  getTotal() {
    return this.pedido.reduce((acc, cv) => acc + cv.total, 0);
  }

  validarCodigoFactory(max: number) {
    return (c: AbstractControl): ValidationErrors|null => {
        return(+c.value < max) ? null : { vlInvalido: true};
    };
  }
}
