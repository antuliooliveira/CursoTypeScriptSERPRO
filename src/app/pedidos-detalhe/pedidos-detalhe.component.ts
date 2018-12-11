import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from 'src/app/shared/model/pedido';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pedidos-detalhe',
  templateUrl: './pedidos-detalhe.component.html',
  styleUrls: ['./pedidos-detalhe.component.css']
})
export class PedidosDetalheComponent implements OnInit {

  // @Input() idPedido: string;
  id: string;
  inscricao: Subscription;

  pedido: Pedido;

  constructor(private pedidosService: PedidoService,
                private route: ActivatedRoute,
                private router: Router ) { }

  // ngOnInit() {
  //   this.pedido = this.pedidosService.consultar (this.idPedido);
  // }

  ngOnInit() {
    console.log ('invocado ngOnInit de pedidos detalhe');
    this.inscricao = this.route.params.subscribe(params => {
                                                    this.id = params['id'];

                                                    console.log ('O id é: ' + this.id);

                                                    this.pedido = this.pedidosService.consultar(parseInt(this.id,2));
                                                    if (this.pedido === null) {
                                                      this.router.navigate(['/naoEncontrado']);
                                                    }
                                                  });
  }

}
