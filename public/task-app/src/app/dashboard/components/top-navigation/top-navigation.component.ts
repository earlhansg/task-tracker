import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/* icons */
import { faEnvelope, faBell, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  faEnvelope = faEnvelope;
  faBell = faBell;
  faBars = faBars;

  constructor() { }

  ngOnInit() {}

}
