import { Component, Inject, OnInit,
         OnDestroy, ChangeDetectionStrategy } from '@angular/core';

/* dialog */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* service */
import { FormService } from '@app/shared/services/form/form.service';
/* rxjs */
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formService: FormService) {}

  ngOnInit() {
    this.subscription = this.formService.getValues().subscribe(values => {
      const ticketStatus = values ? !!Object.keys(values.formValues).length : false;
      if (ticketStatus) {
        this.onNoClick();
      } else console.log('no data yet');
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
