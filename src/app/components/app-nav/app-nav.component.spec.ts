import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {AppNavComponent} from "./app-nav.component";

TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

describe('AppNavComponent', () => {
	let component: AppNavComponent;
	let fixture: ComponentFixture<AppNavComponent>;
	let el: DebugElement;

	beforeEach(() => {
		const bed = TestBed.configureTestingModule({
			declarations: [AppNavComponent],
			imports: [RouterTestingModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});

		fixture = bed.createComponent(AppNavComponent);
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
