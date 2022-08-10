import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError, } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';
const capturarErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response;
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('data: ',data))
//     .catch(err => console.warn('error: ',err));

// fetchPromesa
//     .then(capturarErrores) // se valida si hay un error
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error: ', err)); // Solo en caso de ejecutar el throw entra en el catch


const manejarError = (error: AjaxError) => {
    console.warn('Error en: ', error.message);
    return of([]); // en este caso se retorna un observable con array vacio
}

// con ajax de rxjs puedo hacer peticiones http y trabajarlas como observables
// catchError es un operador que permite capturar los errores, el cual retorna un observable
ajax(url).pipe(
    map(resp => resp.response),
    catchError(manejarError)
).subscribe(users => console.log('Usuarios: ', users))