import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mbaas-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  @Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
