import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {AboutComponent} from "./about.component";


TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

describe('AboutComponent', () => {
	let component: AboutComponent;
	let fixture: ComponentFixture<AboutComponent>;
	let el: DebugElement;

	beforeEach(() => {
		const bed = TestBed.configureTestingModule({
			declarations: [AboutComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});

		fixture = bed.createComponent(AboutComponent);
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
