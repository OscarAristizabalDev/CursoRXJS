import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';

const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando....';

const body = document.querySelector('body');

// Streams
ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true) // utilizamos el startWith para enviar un true antes de que se realice la petición http
).subscribe(resp => {
    if(resp === true){
        body.append(loadingDiv)
    }else{
        document.querySelector('.loading').remove();
    }
    console.log(resp)
});