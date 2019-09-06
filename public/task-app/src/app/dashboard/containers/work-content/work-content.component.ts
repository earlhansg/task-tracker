import { Component, ViewChildren, QueryList, OnInit, TemplateRef, ViewChild } from '@angular/core';
/* components  */
import { ColumnComponent } from '@app/dashboard/components/column/column.component';
import { CreateTicketFormComponent } from '@app/dashboard/components/create-ticket-form/create-ticket-form.component';
import { DialogComponent } from '@app/shared/components/dialog/dialog.component';
/* interface */
import { Task } from '@app/dashboard/models/interfaces/task.interface';
/* mock data */
import { task, tasks } from '@app/dashboard/containers/work-content/work.data';
/* icons */
import { faPlus, faStickyNote } from '@fortawesome/free-solid-svg-icons';
/* dialog */
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit {
  faPlus = faPlus;
  column: ColumnComponent;
  @ViewChildren(ColumnComponent) columns: QueryList<ColumnComponent>;

  task: Task = task;
  mockData: Task[] = tasks;

  header = 'Create Ticket';
  icon = faStickyNote;
  @ViewChild('createTicketForm', {static: false}) createTicketFormTemplate: TemplateRef<any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: { header: this.header, icon: this.icon, template: this.createTicketFormTemplate }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  addTask() {
    this.columns
        .forEach((item) => item.columnName === this.task.columnName
        ? item.createTask(this.task) : null);
  }

}
