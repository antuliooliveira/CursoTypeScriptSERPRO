import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-app-curso',
  templateUrl: './app-curso.component.html',
  styleUrls: ['./app-curso.component.css']
})
export class AppCursoComponent implements OnInit {

@Input() nome: string;

  constructor() { }

  ngOnInit() {
  }
}
