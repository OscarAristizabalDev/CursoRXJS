import { fromEvent,  merge,  of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, startWith, take } from 'rxjs/operators';

const keyUp$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

// El merge es una función que retorna un observable
// Esta función recibe observables,
// El cual los va concatenar, el resultado va ser el producto de ambos observables
// combinados simultaneamente
merge(
    keyUp$.pipe(map(event => event.type)),
    click$.pipe(map(event => event.type))
).subscribe(console.log)