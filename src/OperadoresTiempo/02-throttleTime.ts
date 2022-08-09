import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';


// Ejemplo 1
const click$ = fromEvent<PointerEvent>(document, 'click');

// throttleTime es un operador que solo toma la primera emisión e ignora las otras
// emisiones durante el periodo de tiempo
click$.pipe(
    throttleTime(3000) // en este caso solo va a tomar el último evento click realizado dentro del segundo
).subscribe(console.log)


// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true, // toma el primer elemento emitido en el periodo de tiempo
        trailing: true // toma el último elemento emitido en el periodo de tiempo
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)
