import { ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1';

// getJSON permite configurar los headers como un segundo argumento
const observable$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

observable$.subscribe(data => console.log('data', data));