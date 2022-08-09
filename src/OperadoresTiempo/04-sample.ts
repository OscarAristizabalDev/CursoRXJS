import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';


// Ejemplo 1
const interval$ = interval(500); // este observable va a emitir valores cada medio segundo
const click$ = fromEvent<PointerEvent>(document, 'click');

// sample es un operador que recibe un observable que emite valores (click)
// pero el sample solo va emitir el valor del interval$ cuando se emita un valor del observable que recibe
// en este caso el sample recibe un observable que emite valores cuando se da click, 
// entonces cuando se de click tomara el último valor del interval
interval$.pipe(
    sample(click$),
).subscribe(console.log)

