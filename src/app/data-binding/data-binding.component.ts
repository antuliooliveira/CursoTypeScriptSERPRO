import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  mensagem = '';
  conteudoAtual = '';
  conteudoSalvo = '';

  private nome = 'SERPRO';

  constructor() {}

  ngOnInit(): void {
  }
      onClick(telefone: string) {
      if(telefone) {
      this.mensagem = 'Chamando número ' + telefone + '...';
      } else {
      this.mensagem = 'Nenhum número para chamar!';
      }
      }
      onKeyup(event: KeyboardEvent) {
        console.log(event);
        this.conteudoAtual = (<HTMLInputElement> event.target).value;
        }
        onSave(texto: string) {
        this.conteudoSalvo = texto;
        }
        }




