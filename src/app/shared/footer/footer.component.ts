import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  year= new Date().getFullYear(); //Este metodo nos da el año actual

  constructor() { }

  ngOnInit(): void {
  }

}
