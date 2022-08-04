import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of<any>(1, 1, '1', 3, 3, 2, 2, 4, 4, 5, 3, '1');

// distinctUntilChanged emite valores siempre y cuando la emisión anterior no sea la misma
numeros$.pipe(
    distinctUntilChanged() // ===
).subscribe(console.log);


interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    }
];

from(personajes).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre ) // si el anterior es igual al actual no lo emite
).subscribe(console.log);