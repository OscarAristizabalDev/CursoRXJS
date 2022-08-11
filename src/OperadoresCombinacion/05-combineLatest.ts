import { fromEvent, combineLatest } from 'rxjs';
import { map,  } from 'rxjs/operators';

const keyUp$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


// combineLatest(
//     keyUp$.pipe(map(event => event.type)),
//     click$.pipe(map(event => event.type))
// ).subscribe(console.log)


const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email1@gmail.com';

input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);


// helpers
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map<KeyboardEvent, string>(event => event.target['value'])
    )
}


// combineLatest en una funcion que solo emite valores cuando los observaciones que recibe como argumento
// todos han emitido por lo menos un valor
// Esta función genera un observable que emite valores combinando los ultimos valores de los observables
combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log)