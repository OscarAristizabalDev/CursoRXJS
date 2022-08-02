import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5);

// Tap es un operador que no hace ninguna modificación a los valores que recibimos del observable,
// pero que sirve para ver como va fluyendo la información en los observables.
// Sirve para depurar todo el proceso desde el principio hasta el final
numeros$.pipe(
    tap(x => {
        console.log('antes', x);
        return 100;
    }),
    map(val => val * 10),
    tap({
        next: valor => console.log('después', valor),
        complete: () => console.log('Se terminó todo')
    })
).subscribe(val => console.log('subs', val));