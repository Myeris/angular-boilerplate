import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {HomeComponent} from "./home.component";

TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let el: DebugElement;

	beforeEach(() => {
		const bed = TestBed.configureTestingModule({
			declarations: [HomeComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});

		fixture = bed.createComponent(HomeComponent);
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
