import { interval, timer } from 'rxjs';

const observer = {
    next: value => console.log('Next: ', value),
    complete: () => console.log('Complete: '),
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5); // Se le suman 5 segundos

const interval$ = interval(1000); // Se queda emitiendo valores en intervalos de tiempo
const timer$ = timer(2000); // Solo emite un valor en un intervalo de tiempo
const timer2$ = timer(2000, 1000); // aca pracitamente se crea un interval cada 1 segundo pero que inicia en 2 segundos
const timer3$ = timer(hoyEn5); // se emite el observable 5 minutos después

console.log('Inicio');
//interval$.subscribe(observer);
//timer$.subscribe(observer);
//timer2$.subscribe(observer);
timer3$.subscribe(observer);
console.log('Fin');