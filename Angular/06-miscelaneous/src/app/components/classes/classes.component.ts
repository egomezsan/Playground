import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {

  alertStyle = 'alert-success';
  loading = false;

  constructor() {
  }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000 );
  }

}
