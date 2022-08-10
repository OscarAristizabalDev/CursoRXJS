import { fromEvent, interval } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3)); // take solo emite tres valores
const click$ = fromEvent(document, 'click');

click$.pipe(
    concatMap( () => interval$ ) // concatMap emite los valores de las subscripciones de manera secuencial
    // es decir, debe esperar a que se terminen de emitir los valores de la primera subscripción 
    // para luego emitir los valores de las otras subscripciones y así sucesivamente.
    // como bien dice su nombre, concatena las subscripciones
).subscribe(console.log)