import { PedidosComponent } from './pedidos/pedidos.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoComponent } from './home/pedidos.Component';

const APP_ROUTES : Routes = [
  {path : 'pedidos', Component: PedidoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { APP_ROUTES};
