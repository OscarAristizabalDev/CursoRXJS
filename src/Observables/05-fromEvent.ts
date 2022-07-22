import { fromEvent, Observer } from 'rxjs';

/***
 * Eventos del dom
 */

const source1$ = fromEvent<MouseEvent>(document, 'click');
const source2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<any> = {
    next: valor => console.log('siguiente  [next]: ', valor),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]: ')
};

// se realiza la destructuracion del objeto mouseEvent tomando las coordenadas x, y
source1$.subscribe(({ x, y }) => {
    console.log(x, y)
});
source2$.subscribe(evento => {
    console.log('Evento: ', evento.key);
});