import { Component, ViewEncapsulation } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'test';
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Medicine List',
                routerLink: '/list-medicine/'
            },
            {
                label: 'Add Medicine',
                routerLink: '/add-medicine/'
            }
        ];
    }
}
