import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {AppHeaderComponent} from "./app-header.component";
import {RouterTestingModule} from "@angular/router/testing";

TestBed.initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

describe('AppHeaderComponent', () => {
	let component: AppHeaderComponent;
	let fixture: ComponentFixture<AppHeaderComponent>;
	let el: DebugElement;

	beforeEach(() => {
		const bed = TestBed.configureTestingModule({
			declarations: [AppHeaderComponent],
			imports: [RouterTestingModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		});

		fixture = bed.createComponent(AppHeaderComponent);
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
