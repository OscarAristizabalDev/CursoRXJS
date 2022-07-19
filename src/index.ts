import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('siguiente  [next]: ', valor),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]: ')
}

    