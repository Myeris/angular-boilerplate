import {Component} from '@angular/core';
import {fadeInAnimation} from "../../animations";

/**
 * About main component
 */
@Component({
	selector: 'about',
	styleUrls: ['about.component.scss'],
	templateUrl: 'about.component.html',
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})

export class AboutComponent {}
