import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { User } from '@app/dashboard/models';

import * as dashboardComponent from '@app/dashboard/components';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  userMap: Map<number, User>;
  @Input() users: User[];
  @Input() tracks;
  constructor() { }

  ngOnInit() {
    this.fetchUser();
  }

  get trackIds(): string[] {
      return this.tracks.map(track => track.id);
  }
  onTalkDrop(event: CdkDragDrop<[]>) {
    console.log(event);
    // In case the destination container is different from the previous container, we
    // need to transfer the given task to the target data array. This happens if
    // a task has been dropped on a different track.
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
   }

   onTrackDrop(event: CdkDragDrop<[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   }

   fetchUser() {
    // tslint:disable-next-line:no-string-literal
    const myMap = this.users.map<[number, User]>(user => [user.id, user]);
    this.userMap = new Map<number, User> (myMap);
  }

}
