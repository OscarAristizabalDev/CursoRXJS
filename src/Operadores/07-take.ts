import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4, 5);

// Take, sirve para limitar la cantidad de emisiones que un observable puede tener
// el take genera un complete y cancela la ejecución del observable
numeros$.pipe(
    tap(valor => console.log('Tap: ', valor)),
    take(3)
).subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete ')
})