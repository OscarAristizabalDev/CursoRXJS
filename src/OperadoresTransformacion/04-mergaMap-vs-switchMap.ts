import { fromEvent, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, mergeMap, switchMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    mergeMap(() => interval$) // El mergeMap se subscribe a uno o varios observables, pero cada vez
    // que se de click se subscribe a ese otro observable y ambos observables seguiran emitiendo valores
    // tener mucho cuidado con este operador ya puede demandar mucho consumo de memoria.
    // mergeMap mantiene todas las subscripciones internas activas.
)//.subscribe(console.log)

click$.pipe(
    switchMap(() => interval$) // El switchMap se subscribe a uno varios observables, pero cada vez 
    // que se de click se subscribe a ese otro observable, pero el anterior se completa y dejara de emitir valores
    // solo el ultimo observable al que se subscribe es que el que seguira emitiendo valores.
    // switchMap Solo mantiene la última subscripción interna activa.
).subscribe(console.log)