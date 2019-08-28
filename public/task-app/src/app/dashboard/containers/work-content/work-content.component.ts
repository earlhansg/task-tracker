import { Component, OnInit } from '@angular/core';

/* icons */
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit {
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {}

}
