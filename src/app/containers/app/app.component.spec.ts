import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";

TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let el: DebugElement;

	beforeEach(() => {
		const bed = TestBed.configureTestingModule({
			declarations: [AppComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});

		fixture = bed.createComponent(AppComponent);
		component = fixture.componentInstance;
		el = fixture.debugElement;
	});

	afterEach(() => {
		component = null;
		fixture = null;
		el = null;
	});

	it('should be defined', () => {
		expect(component).toBeDefined();
	});
});
