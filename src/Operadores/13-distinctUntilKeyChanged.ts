import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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
    distinctUntilKeyChanged('nombre') 
    // Emite valores siempre y cuando la emisión anterior no sea la misma
    // Este operador recibe la propiedad que se va verificar que no se repite, este caso la propiedad nombre
    // si el anterior es igual al actual no lo emite
).subscribe(console.log);