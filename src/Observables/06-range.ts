import { asyncScheduler, of, range, scheduled } from 'rxjs';

//const source$ = of(1, 2, 3, 4, 5)
// const source$ = range(1, 5);
// const source$ = range(5);

// asyncScheduler: convierte el observable en asyncrono 
const source$ = scheduled(range(1, 5), asyncScheduler)

console.log('inicio');
source$.subscribe(console.log);
console.log('fin');