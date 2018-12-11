import { ModuleWithProviders } from '@angular/core';
import { PedidosComponent } from '../app/pedidos/pedidos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'pedidos', component: PedidosComponent},
  // {path:'pedidos/:id',component: PedidosDetalheComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

