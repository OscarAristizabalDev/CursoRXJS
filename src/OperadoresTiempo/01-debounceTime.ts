import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';


// Ejemplo 1
const click$ = fromEvent<PointerEvent>(document, 'click');

// debounceTime Este operador solo emite cada periode de tiempo tomando la ùltima emisión
click$.pipe(
    debounceTime(1000) // en este caso solo va a tomar el último evento click realizado dentro del segundo
).subscribe(console.log)


// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    map(target => target.key),
    distinctUntilChanged()
).subscribe(console.log)

