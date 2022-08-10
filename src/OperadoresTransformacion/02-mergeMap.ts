import { fromEvent, interval, of } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3) // solo realiza tres emisiones
    ) ),
).subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete: ')
});



const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log);