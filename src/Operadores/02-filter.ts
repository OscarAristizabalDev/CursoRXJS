import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// En este ejemplo con filter solo se emiten aquello numero impares
range(1, 10).pipe(
    filter(val => val % 2 == 1)
).subscribe(console.log);


// También con el filter se puede acceder a la posición i
range(1, 10).pipe(
    filter((val, i) => {
        console.log('index', i);
        return val % 2 == 1;
    })
).subscribe(console.log);

// Interface para personajes
interface Personaje {
    tipo: string,
    nombre: string
}

// listado de personajes
const personajes: Personaje[] = [
    {
        tipo: 'hereo',
        nombre: 'Batman'
    },
    {
        tipo: 'hereo',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
]

// con el filter voy a retornar solo aquellos personajes que sean
// de tipo hereo
from(personajes).pipe(
    filter(val => {
        return val.tipo == 'hereo';
    })
).subscribe(console.log);

// encadenamiento de operadares, permite aplicar un operador seguido del otro
// El siguiente operador va a recibir el valor del anterior operador
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code ), // map recibe un Keyboard y emite un string
    filter( key => key === 'Enter' ) // filter Recibe un string y emite un string, solo emite si la tecla es enter
);

keyUp$.subscribe(console.log);