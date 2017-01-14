import { Operator } from '../Operator';
import { Observer } from '../Observer';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo the observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence
 * @method sequenceEqual
 * @owner Observable
 */
export declare function sequenceEqual<T>(this: Observable<T>, compareTo: Observable<T>, comparor?: (a: T, b: T) => boolean): Observable<boolean>;
export declare class SequenceEqualOperator<T> implements Operator<T, boolean> {
    private compareTo;
    private comparor;
    constructor(compareTo: Observable<T>, comparor: (a: T, b: T) => boolean);
    call(subscriber: Subscriber<boolean>, source: any): any;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class SequenceEqualSubscriber<T, R> extends Subscriber<T> {
    private compareTo;
    private comparor;
    private _a;
    private _b;
    private _oneComplete;
    constructor(destination: Observer<R>, compareTo: Observable<T>, comparor: (a: T, b: T) => boolean);
    protected _next(value: T): void;
    _complete(): void;
    checkValues(): void;
    emit(value: boolean): void;
    nextB(value: T): void;
}
