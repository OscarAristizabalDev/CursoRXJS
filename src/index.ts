import { Observable } from 'rxjs';



//const observable$ = Observable.create();
const observable$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    subscriber.complete();

    subscriber.next('Hola 2');
    subscriber.next('Mundo 2');
});

observable$.subscribe(resp => console.log(resp) )