import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

// Take, solo toma la primera emision y automaticamente se complete
click$.pipe(
    take(1)
).subscribe({
    //next: valor => console.log('next: ', valor),
    //complete: () => console.log('complete ')
});


// First es igual a take(1), solo toma la primera emision y automaticamente se complete
click$.pipe(
    first()
).subscribe({
    //next: valor => console.log('next: ', valor),
    //complete: () => console.log('complete ')
});

// First permite trabajar con condiciones, en este ejemplo se aplica para obtener la primer emisión
// cuyo ClientY sea mayor igual a 250
// Map, permite hacer la destructuración del objeto PointerEvent para solo obtener los valores clientX y clientY 
click$.pipe(
    tap<PointerEvent>(console.log),
    // // map( event => ({
    // //     clientY: event.clientY,
    // //     clientX: event.clientX
    // // }) )
    map( ({ clientX, clientY }) => ({ clientY,clientX }) ),
    first(event => event.clientY >= 250)
).subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete ')
});