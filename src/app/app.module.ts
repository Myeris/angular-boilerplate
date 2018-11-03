import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Routes, RouterModule} from "@angular/router";

// custom modules
import {HomeModule} from "../home/home.module";
import {AboutModule} from "../about/about.module";

// containers
import {AppComponent} from './containers/app/app.component';

// components
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {AppNavComponent} from "./components/app-nav/app-nav.component";

// store
import {Store} from "../store";

// routes
export const ROUTES: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'home'}
];

/**
 * App root module
 */
@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(ROUTES),

		// custom modules
		HomeModule,
		AboutModule
	],
	exports: [],
	declarations: [
		// containers
		AppComponent,

		// components
		AppHeaderComponent,
		AppNavComponent
	],
	providers: [
		Store
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
