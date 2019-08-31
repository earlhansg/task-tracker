import { Component, OnInit, Input, } from '@angular/core';
/* icons */
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() columnName: string;
  faArrowDown = faArrowDown;

  constructor() { }

  ngOnInit() {}

  addTask() {
    console.log('emitted data');
  }

}
