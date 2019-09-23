import { Component, ViewChildren, QueryList, OnInit, AfterViewInit,
         OnDestroy, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

/* components  */
import * as dashboardComponent from '@app/dashboard/components';
import * as sharedComponent from '@app/shared/components';
/* interface */
import { Ticket } from '@app/dashboard/models';
/* enum */
import { Column } from '@app/dashboard/enums/column.enum';
/* mock data */
import { tickets } from '@app/dashboard/containers/work-content/work.data';
/* icons */
import { faPlus, faStickyNote } from '@fortawesome/free-solid-svg-icons';
/* dialog */
import { MatDialog } from '@angular/material/dialog';
/* snackbar */
import { MatSnackBar } from '@angular/material/snack-bar';
/* service */
import { FormService } from '@app/shared/services';
/* rxjs */
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-work-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit, OnDestroy, AfterViewInit {
  faPlus = faPlus;
  column: dashboardComponent.ColumnComponent;

  @ViewChildren(dashboardComponent.ColumnComponent)
  columns: QueryList<dashboardComponent.ColumnComponent>;

  mockData: Ticket[] = tickets;
  subscription: Subscription;

  header = 'Create Ticket';
  icon = faStickyNote;
  @ViewChild('createTicketForm', {static: false})
  createTicketFormTemplate: TemplateRef<dashboardComponent.CreateTicketFormComponent>;


  constructor(public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private formService: FormService) { }

  ngOnInit() {
    this.subscription = this.formService.getValues().subscribe(values => {
      const created      = '08/09/17';
      const columnName   = Column.Backlog;
      const ticketStatus = values ? !!Object.keys(values.formValues).length : false;
      if (ticketStatus) {
        const item: Ticket = {...values.formValues, created, columnName };
        this.addTicket(item, 'addTicket');
      }
    });
  }

  ngAfterViewInit() {
    this.columns.forEach((item) => {
      item.updated.subscribe(data => this.addTicket(data, 'updateTicket'));
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.columns.forEach((item) => {
      item.updated.unsubscribe();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(sharedComponent.DialogComponent, {
      width: '350px',
      data: { header: this.header, icon: this.icon, template: this.createTicketFormTemplate }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.formService.clearValues();
    });
  }


  addTicket(item: Ticket, type: 'addTicket'| 'updateTicket') {
    this.columns
        .forEach((val) => val.columnName === item.columnName
        ? val.createTicket(item) : null);
    const message = type === 'addTicket' ? 'added' : 'updated';
    this.snackBar.openFromComponent(sharedComponent.SuccessMessageComponent, {
      data: `${item.name} ticket ${message}`,
      duration: 2500
    });
  }

}
