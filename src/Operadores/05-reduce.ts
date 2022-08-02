import { interval } from 'rxjs';
import { reduce , take, tap } from 'rxjs/operators';



//*******Manejo de reduce en javascript******
const numbers = [1,2,3,4,5,6];

// funciona para realizar la suma
const calcularTotalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

// Función que se aplica a un arreglo de numeros
// Recibe una funcion con un valor acumulador y un valor actual,
// 0 indica el valor en que inicia el calculo
const total = numbers.reduce(calcularTotalReducer, 0)
// **********************************

// Se crear un observable con interval que va a emitir un valor cada 500 milesimas de segund
// Con el operador take se especifica cuantos valores se van a tomar de los que el interval esta emitiendo
// con el operador tap simplemente hago seguimiento
// con el operador reduce hago el calculo de los valores emitidos por el interval
interval(500).pipe(
    take(7),
    tap(console.log),
    reduce( calcularTotalReducer, 0 )
)
.subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('complete')
});
