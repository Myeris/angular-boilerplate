import {Component} from '@angular/core';
import {fadeInAnimation} from "../../../animations";

@Component({
	selector: 'app-root',
	styleUrls: ['app.component.scss'],
	templateUrl: 'app.component.html',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})

export class AppComponent {}
