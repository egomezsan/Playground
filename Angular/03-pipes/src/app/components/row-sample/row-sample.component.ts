import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-sample',
  templateUrl: './row-sample.component.html'
})
export class RowSampleComponent implements OnInit {

  @Input() input: any;
  @Input() pipeOperation: string;

  constructor() { }

  ngOnInit() {
  }

}
