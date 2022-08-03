import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];

// const calcularTotalAcomulado = (acc, cur) => {
//     return acc + cur;
// }

// Se crea el metodo en una sola línea
const calcularTotalAcomulado = (acc, cur) => acc + cur;

// aplicando el operador reduce
// el operador reduce solo emite un valor acomulado cuando la subscrición es completada o finaliza
from(numeros).pipe(
    reduce(calcularTotalAcomulado, 0)
).subscribe(valor => console.log('reduce() ', valor));


// aplicando el operador scan
// a diferenca del reducen, este va emitiendo los valores, no espera a que se complete la subscripción
from(numeros).pipe(
    scan(calcularTotalAcomulado, 0)
).subscribe(valor => console.log('scan() ', valor))

// Redux -> manejar el estado global de mi aplicación en único objeto
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'abc' },
    { id: 'fher', autenticado: false, token: 'abc123' }
];

// por medio del scan estamos pendientes de todos los inicios de sesion, manejando el acomulado y el actual inicio de sesion
// return { ...acc, ...cur } en este punto se realiza la destructuración
// ...acc permite obtener todas las propiedades que tiene el acc (acomulado)
// ...cur permite obtener todas las propiedades que tiene el cur (actual)
// { edad: 33 } funciona como segundo parametro del scan, el cual viene siendo un objeto que tiene edad 33
// { edad: 33 } quiere decir a todos los objetos de inicio de sesión se les va asignar la edad 33
const state$ = from(user).pipe(
    scan<Usuario, Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

// Se utiiza el map para obtener solo el Id
const id$ = state$.pipe(
    map(state => state.id)
)

id$.subscribe(console.log)