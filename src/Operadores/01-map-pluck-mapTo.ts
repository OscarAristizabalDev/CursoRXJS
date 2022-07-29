import { fromEvent, range } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// Manejo del map, sirve para modificar los valores que manejo el observable
// primer parametro indica el valor con el que se va a trabajar 
// segundo parametro indica el valor que se va a devolver
range(1, 5)
    .pipe(
        map<number, string>(val => (val * 10).toString())
    )
    .subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// Se utiliza el operador map para obtener el code del evento keyup
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

// Deprecated
// El operador pluck también permite acceder a las variables que genere el evento keyup
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

// Deprecated
// Este operador simplemente sirve para convertir cual valor en la salida indicada
// En esta caso al presionar una tecla el valor de salida es Tecla presionada,
// Pero se pueden manejar objetos, enteros, etc. cualquier valor
const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

// Se muestra todos los valores del observable fromEvent Document
keyup$.subscribe(console.log);

// Al subscribirnos al observable simplemente recibimos el valor del keyup code
// y ya no tenemos la necesidad de buscar el code desde la subscripción
keyupCode$.subscribe(val => console.log('map', val));

// Al subscribirnos al observable simplemente recibimos el valor del keyup targer.baseURI
keyupPluck$.subscribe(val => console.log('pluck', val));

// Al subscribirnos al observable simplemente recibimos el valor del keyup targer.baseURI
keyupMapTo$.subscribe(val => console.log('mapTp', val));