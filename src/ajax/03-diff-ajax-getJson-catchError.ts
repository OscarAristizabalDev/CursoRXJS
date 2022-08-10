import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbisn.org/delay/1';

const capturarErrores = (response: AjaxError) => {
    console.warn('Error:', response.message);
    return of({
        ok: false, 
        usuarios: []
    })
}

// Manejo de catchError en getJson y ajax
const observable$ = ajax.getJSON(url).pipe(
    catchError(capturarErrores)
);
const observable2$ = ajax(url).pipe(
    catchError(capturarErrores)
);


observable$.subscribe(data => console.log('getJson', data));
observable2$.subscribe(data => console.log('ajax', data));

const observable3$ = ajax.getJSON(url).pipe(
    catchError(capturarErrores)
);

observable3$.subscribe({
    next: valor => console.log('next:', valor),
    error: error => console.warn('error:', error),
    complete: () => console.log('complete')
});