import {Observable, BehaviorSubject} from 'rxjs';
import {pluck, distinctUntilChanged} from "rxjs/operators";

/**
 * State interface
 */
export interface State {}

/**
 * State of the store
 */
const state: State = {};

/**
 * Store class
 */
export class Store {
	/** Subjet */
	private subject = new BehaviorSubject<State>(state);
	/** Store */
	private store = this.subject.asObservable().pipe(distinctUntilChanged());

	/**
	 * Get value
	 *
	 * @returns {State}
	 */
	get value() {
		return this.subject.value;
	}

	/**
	 * Select an item into the store
	 *
	 * @param {string} name
	 * @returns {Observable<T>}
	 */
	select<T>(name: string): Observable<T> {
		return this.store.pipe(pluck(name));
	}

	/**
	 * Set item into store
	 *
	 * @param {string} name
	 * @param state
	 */
	set(name: string, state: any) {
		this.subject.next({...this.value, [name]: state});
	}

}
