import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'mbaas-byc0010',
  templateUrl: './byc0010.component.html',
  styleUrls: ['./byc0010.component.scss']
})
export class Byc0010Component extends BaseComponent implements OnInit {

  configView = {
    mainTitle: 'credito rotativo',
    header: {
      title: 'credito rotativo',
      atrasActivado: false
    },
    customColors: {
      background: '#ebecf0',
      header1: 'rgba(29, 29, 29, 1)',
      header2: 'rgba(87, 87, 87, 1)'
    }
  }

  ngOnInit(): void {
  }
}
