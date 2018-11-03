import {Component} from '@angular/core';
import {fadeInAnimation} from "../../../animations";

@Component({
	selector: 'home',
	styleUrls: ['home.component.scss'],
	templateUrl: 'home.component.html',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})

export class HomeComponent {}
