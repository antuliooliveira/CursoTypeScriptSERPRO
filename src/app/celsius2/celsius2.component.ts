import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celsius2',
  templateUrl: './celsius2.component.html',
  styleUrls: ['./celsius2.component.css']
})
export class Celsius2Component implements OnInit {
  farStr: string;
  farNumber: number;
  celsius: number;
  celsiusStr: string;
  valorInvalido = '';
  constructor() { }
  ngOnInit() { }
  converter() {
    this.valorInvalido = '';
    if (this.farStr) {
      // tslint: disable-nex-line:radix
      this.farNumber = parseInt(this.farStr);
      this.celsius = (this.farNumber - 32) * 5 / 9 ;
      this.celsiusStr = this.celsius.toFixed(2);
    } else {
      this.valorInvalido = 'valor invalido!';
    }

  }
}
