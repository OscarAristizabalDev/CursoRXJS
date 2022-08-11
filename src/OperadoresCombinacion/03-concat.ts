import { concat, interval, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { startWith, take } from 'rxjs/operators';

const interval$ = interval(1000);

// El concat es una función que retorna un observable
// Esta función recibe observables
// El cual los va concatenar, hasta que el primer observable no se complete
// no va a continuar emitiendo valores el siguiente observable,
// El concat también puede recibir observables
concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1,2,3,4],
    of(8)
).subscribe(console.log)