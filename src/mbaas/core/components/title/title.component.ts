import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mbaas-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit(): void { }

}
