import {Component} from '@angular/core';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import { Store } from '@ngrx/store';
import { updateGlobalState } from '../store/global.actions';

interface AlertItem {
    type: string;
    message: string;
    checked: boolean;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgbAlertModule, FormsModule, NgForOf],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    alerts: AlertItem[] = [
        {type: 'success', message: 'This is an success alert', checked: false},
        {type: 'info', message: 'This is an info alert', checked: false},
        {type: 'warning', message: 'This is a warning alert', checked: false},
        {type: 'danger', message: 'This is a danger alert', checked: false},
        {type: 'primary', message: 'This is a primary alert', checked: false},
        {type: 'secondary', message: 'This is a secondary alert', checked: false},
        {type: 'light', message: 'This is a light alert', checked: false},
        {type: 'dark', message: 'This is a dark alert', checked: false},
    ];

    alertsRaw: AlertItem[] = this.alerts;

    constructor(private store: Store) {}

    reset() {
        this.alerts = Array.from(this.alertsRaw);
    }

    close(alert: AlertItem) {
        this.alerts = this.alerts.filter(a => a !== alert);
    }

    toggleAlert(alert: AlertItem, event: Event) {
        this.alerts = this.alerts.map(a =>
            a === alert ? { ...a, checked: !a.checked } : a
        )
        const updatedAlert = this.alerts.find(a => a.message === alert.message);
        if (updatedAlert) {
            this.store.dispatch(updateGlobalState({ key: 'alert_list', value: updatedAlert }));
        }
        // alert.checked = !alert.checked;
        // this.store.dispatch(updateGlobalState({ key: 'alert_list', value: alert }));
        if (event) {
            event.stopPropagation();
        }
    }
}
