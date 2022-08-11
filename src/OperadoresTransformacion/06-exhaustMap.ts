import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3)); // take solo emite tres valores
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap( () => interval$ ) // exhaustMap emite los valores ùnicamente de una subscripción, hasta
    // que dicha subscripción no termine de emitir valores, no se puede añadir una nueva subscripción, es decir,
    // se añana una nueva subscripción siempre y cuando no hay ninguna activa
).subscribe(console.log)