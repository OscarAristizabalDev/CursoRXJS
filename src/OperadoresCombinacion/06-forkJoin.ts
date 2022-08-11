import { of, interval, forkJoin } from 'rxjs';
import { map, take, delay } from 'rxjs/operators';

const numeros$ = of(1,2,3,4);
// El interval genera un observable infinito, pero entonces mediante el take lo volvemos finito
const interval$ = interval(100).pipe(
    take(3) // el take permite tomar solo 3 emisiones // 0..1..2
);

const letras$ = of('a','b','c').pipe(
    delay(3500) // sirve para generar un delay en la emisión, en este caso de 3 segundos y medio
);

// forkJoin en una funcion que recibe como argumentos varios observables, los observables deben ser finitos
// El forkJoin espera a que todos los observables hayan emitido los valores
// para finalmente emitir un observables con los ultimos valores que emitieron los observables que recibio como argumentos


// Forma 1
// const obs$ = forkJoin(
//     numeros$,
//     interval$,
//     letras$
// );

// obs$.subscribe(resp => {
//     console.log('numeros: ', resp[0])
//     console.log('intervalos: ', resp[1])
//     console.log('letras: ', resp[2])
// });

// Forma 2
// const obs$ = forkJoin({
//     numeros$,
//     interval$,
//     letras$
// });

// obs$.subscribe(resp => {
//     console.log(resp)
// });

// Forma 3, se asignan nombres a las variables
const obs$ = forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$
});

obs$.subscribe(resp => {
    console.log(resp)
});