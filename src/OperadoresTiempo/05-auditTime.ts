import { fromEvent } from 'rxjs';
import { auditTime, sample, tap, map } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    map(({ x }) => x), // Por medio de la destructuración, se obtiene el valor x del objeto pointerEvent
    tap(val => console.log('tap', val)),
    auditTime(2000), // Operador que emite el valor mas reciente del observable
).subscribe(console.log)


