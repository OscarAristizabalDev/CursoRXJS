import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

// Se crea el botón
const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

// Se agrega el botón al body
document.querySelector('body').append(boton);

// Observable que emite valores hasta mil
const counter$ = interval(1000);
// Observable para manejar el evento del botón
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tan antes de skip')),
    skip(2), // Este operador permite omitir los dos primeros eventos del click
    tap(() => console.log('tan después de skip')), // este tap se ejecuta a la tercer vez de dar click
);

// TakeUntil emite los valores del observable counter$ hasta que el clickBtn$ emita su primer valor
counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete')
});