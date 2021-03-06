import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Celsius2Component } from './celsius2/celsius2.component';
import { AppCursoComponent } from './app-curso/app-curso.component';
import { TesteCursoComponentComponent } from './teste-curso-component/teste-curso-component.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { OperacaoComponent } from './operacao/operacao.component';
import { FerramentaComponent } from './ferramenta/ferramenta.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MenuComponent } from './menu/menu.component';
import { PedidosDetalheComponent } from './pedidos-detalhe/pedidos-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { CapitalizePipe } from './shared/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    Celsius2Component,
    AppCursoComponent,
    TesteCursoComponentComponent,
    CalculadoraComponent,
    OperacaoComponent,
    FerramentaComponent,
    PedidosComponent,
    PedidosDetalheComponent,
    CapitalizePipe,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
