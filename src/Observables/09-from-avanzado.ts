import { of, from, Observer } from 'rxjs';

/**
 * of = crea observable, toma argumentos y genera una secuencia de valores
 * from = crear observable: array, promise, iterable, observable
 */

const observer: Observer<any> = {
    next: valor => console.log('siguiente: ', valor),
    error: error => console.warn('error'),
    complete: () => console.info('Completado: ')
};

//const source$ = from([1,2,3,4,5]);
//const source$ = of(...[1,2,3,4,5]);
//const source$ = from('Fernando');
//const source$ = of('Fernando');

const source$ = from(fetch('https://api.github.com/users/klerith'));

//source$.subscribe(observer);
source$.subscribe(async (resp) => {
    console.log(resp);
    const dataRespuesta = await resp.json();
    console.log(dataRespuesta);
});

// Función generadora o iterable
const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// se puede iterar la data por medio del ciclo for
for (let id of miIterable) {
    console.log(id);
}
// o también se puede iterar la data por medio del fromEvent
// ya que el from también trabaja con iterables
from(miIterable).subscribe(observer);