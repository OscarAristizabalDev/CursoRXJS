import { of } from 'rxjs';


const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
// const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, Promise.resolve(true));

console.log('Inicio del Obs$: ');

// Se ejecuta de manera sincrona, es decir, hasta que no se termine la subscripción
// no se ejecuta la siguiente línea.
obs$.subscribe({
    next: value => console.log('Next: ', value),
    error: null,
    complete: () => console.info('Terminamos la secuencia: ')
});
console.log('Fin del Obs$: ');