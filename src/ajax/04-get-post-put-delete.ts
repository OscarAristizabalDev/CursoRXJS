import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbin.org/delay/1';

const capturarErrores = (response: AjaxError) => {
    console.warn('Error:', response.message);
    return of({
        ok: false,
        usuarios: []
    })
}


// Petición get utilizando ajax de rxjs
// Url
// objeto a enviar
// objeto con la configuración de los headers
ajax.get(url, {
    'mi-token': 'ABC123'
}).subscribe(resp => console.log('GET: ', resp));

// Petición post utilizando ajax de rxjs
// Url
// objeto a enviar
// objeto con la configuración de los headers
ajax.post(url, {
    id: 1,
    nombre: 'Oscar '
}, {
    'mi-token': 'ABC123'
}).subscribe(resp => console.log('POST: ', resp));

// Petición put utilizando ajax de rxjs
// Url
// objeto a enviar
// objeto con la configuración de los headers
ajax.put(url, {
    id: 1,
    nombre: 'Oscar '
}, {
    'mi-token': 'ABC123'
}).subscribe(resp => console.log('PUT: ', resp));

// Petición delete utilizando ajax de rxjs
// Url
// objeto con la configuración de los headers
ajax.delete(url, {
    'mi-token': 'ABC123'
}).subscribe(resp => console.log('DELETE: ', resp));


ajax({
    url: url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Oscar '
    }
}).subscribe(resp => console.log('ULTIMO: ', resp))