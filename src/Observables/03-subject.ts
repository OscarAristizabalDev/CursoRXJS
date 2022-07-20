import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('siguiente  [next]: ', valor),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]: ')
}

const intervalo$ = new Observable<number>(subscriber => {
    // se emite un número aleatorio cada segundo
    const intervalID = setInterval(()=>subscriber.next(Math.random()),1000);

    return () => {
        clearInterval(intervalID);
        console.log("Intervalo destruido");
    }
});

/**
 * 1. Casteo múltiple, quiere decir, que todas las subscripciones van a recibir siempre el mismo valor
 * 2. También es un observer
 * 3. Next, error, y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(numero => console.log('subs1: ',numero))
// const subs2 = intervalo$.subscribe(numero => console.log('subs2: ',numero))

// al trabajar con el subject, en todas las subscripciones siempre vamos a recibir el mismo valor
const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout(() => {

    // El subject me permite emitir valores fuera del observable, es decir, lo transforma de cold observable
    //  a hot observable
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)