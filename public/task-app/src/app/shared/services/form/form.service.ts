import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormService {
    private subject = new Subject<any>();

    sendValues(formValues: any) {
        this.subject.next({ formValues });
    }

    clearValues() {
        this.subject.next();
    }

    getValues(): Observable<any> {
        return this.subject.asObservable();
    }
}
