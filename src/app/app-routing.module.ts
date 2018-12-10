import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PedidosComponent } from '../app/pedidos/pedidos.component';

const routes: Routes = [
  {path : 'pedidos', component: PedidosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
