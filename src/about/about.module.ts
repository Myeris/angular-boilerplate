import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./containers/about.component";

export const ROUTES: Routes = [
	{path: 'about', component: AboutComponent},
];

/**
 * Home module
 */
@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	],
	declarations: [
		AboutComponent
	]
})
export class AboutModule {
}
