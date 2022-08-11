import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

// startWith realiza hacer una emisión previa antes que el observable
// empiece a emitir valores
const numeros$ = of(1, 2, 3).pipe(
    startWith('a','b','c'), // startWith realiza hacer una emisión previa antes que el observable empiece a emitir valores
    endWith('x','y','z') // endWith realiza hacer una emisión final de valores antes de que el observable se complete
);

numeros$.subscribe(console.log)