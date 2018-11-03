import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./containers/home/home.component";

export const ROUTES: Routes = [
	{path: 'home', component: HomeComponent},
];

/**
 * Home module
 */
@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	],
	declarations: [
		HomeComponent
	]
})
export class HomeModule {
}
