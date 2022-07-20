import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('siguiente  [next]: ', valor),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]: ')
}

const intervalo$ = new Observable<number>(subscriber => {
    // crear un contador, 1,2..., 3
    let contador = 0;
    const interval = setInterval(() => {
        contador++;
        subscriber.next(contador);
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscription = intervalo$.subscribe(num => console.log('Num: ', num));

setTimeout(() => {
    subscription.unsubscribe();

    console.log('Completado timeout');
}, 3000);