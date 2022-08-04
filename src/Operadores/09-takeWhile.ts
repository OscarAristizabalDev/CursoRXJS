import { fromEvent } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

// TakeWhile permite emitir valores mientras la condición se cumpla
click$.pipe(
    map(({ x, y }) => ({ x, y })), // destructuracion del PointerEvent donde solo obtenemos los valores x , y del objeto
    // takeWhile(({ y }) => y <= 150) // por defecto el segundo parametro es false
    takeWhile(({ y }) => y <= 150, true) // por defecto es false, sin embargo, si colocamos true 
    // se indica que emite el último valor que no cumpla con la condición
).subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete')
});
