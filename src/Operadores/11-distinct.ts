import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of<any>(1, 1, '1', 3, 3, 2, 2, 4, 4, 5, 3, '1');

// Distinct Solo permite pasar las emisiones cuyo valores no hayan sido previamente omitidos
numeros$.pipe(
    distinct()
).subscribe(console.log);


interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
];

from(personajes).pipe(
    distinct(personaje => personaje.nombre) // Solo emite los personajes con diferente nombre
).subscribe(console.log);