import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('siguiente  [next]: ', valor),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]: ')
}

//const observable$ = Observable.create();
const observable$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    // forzar un error
    // const a = undefined;
    // a.nombre = 'Fernando';

    subscriber.complete();

    subscriber.next('Hola 2');
    subscriber.next('Mundo 2');
});

// Forma 1
observable$.subscribe(observer);

// Forma 2
observable$.subscribe({
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.log('Completado')
});

    