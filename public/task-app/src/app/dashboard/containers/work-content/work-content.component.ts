import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { ColumnComponent } from '@app/dashboard/components/column/column.component';

/* icons */
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit {
  faPlus = faPlus;
  @ViewChildren(ColumnComponent) column: QueryList<ColumnComponent>;

  task = {
    name: 'Database',
    type: 'Design',
    description: 'normalize db in the project',
    created: '08/09/17',
    assign: 'Jason Bayocot'
  };

  constructor() { }

  ngOnInit() {}

}
