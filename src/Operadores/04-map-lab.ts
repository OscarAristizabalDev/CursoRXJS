import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium malesuada ipsum, sit amet venenatis ex tincidunt sed. Maecenas at est at mi congue sagittis. Ut quis vestibulum dui. Vestibulum posuere nec nisl ac lobortis. Nullam vitae laoreet ante, ac maximus libero. Suspendisse mattis vulputate mauris nec pretium. Phasellus cursus elit quis urna bibendum facilisis. Ut posuere nibh et erat iaculis luctus. In hac habitasse platea dictumst. Nam risus urna, hendrerit vel tempor eu, sodales nec nunc.
<br/><br/>
Mauris porttitor placerat erat ut eleifend. Quisque et condimentum ex. Mauris ultrices quam erat. Proin fermentum velit at sollicitudin vulputate. Aenean at interdum sem, at fermentum elit. In bibendum ipsum ut massa fermentum ultrices. Suspendisse fringilla dignissim mauris at eleifend. Etiam scelerisque eget turpis non cursus.
<br/><br/>
Duis a metus posuere, condimentum nibh nec, laoreet enim. Ut sed eros imperdiet, pretium justo et, convallis enim. Integer nec nibh ac purus mollis cursus. Maecenas sagittis neque pellentesque orci rutrum consectetur. Pellentesque euismod fringilla mi non lacinia. Nulla viverra, velit quis interdum commodo, nulla metus interdum nibh, et volutpat massa erat in nibh. Mauris eu ultricies ipsum, in commodo sem. Nunc quam odio, accumsan non nisl eget, blandit suscipit justo. Phasellus vitae pharetra leo. Duis gravida lectus quis purus tincidunt auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/><br/>
Nunc placerat quis ante eu ornare. Maecenas velit ipsum, luctus in diam vitae, feugiat facilisis neque. In rhoncus, urna sit amet hendrerit varius, neque felis consectetur leo, et fringilla urna tortor vel risus. Integer sed facilisis nulla. Praesent rutrum consectetur suscipit. Fusce eget luctus massa. Sed iaculis lacinia lacus, vitae rhoncus orci eleifend sed. Nam fringilla pellentesque bibendum. Phasellus pulvinar odio arcu, at pellentesque magna iaculis ut. Ut blandit elementum libero in viverra.
<br/><br/>
Vivamus non vehicula libero. Proin in nisl pellentesque mi laoreet euismod at a justo. Quisque sit amet elit et nisl sollicitudin accumsan in eu metus. Donec est dui, dignissim euismod lorem fringilla, mattis convallis sem. Nulla et nisi quis elit viverra faucibus vitae vitae orci. Vivamus blandit diam risus, nec lobortis erat porttitor sed. Quisque porttitor est vitae arcu venenatis, quis egestas magna semper. Curabitur luctus tempus porttitor. Sed vitae nisl maximus, molestie eros sed, ullamcorper neque. Cras tempus orci nec ante fringilla ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac varius urna. Cras feugiat urna a felis tempor vehicula. Aenean eu neque felis.
`

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Funcion para calcular el porcentaje del scroll
const calularPorcentajeScroll = (event) => {
    // se realiza la destructuración del objeto para obtener los valore
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    // Se calcula el porcentaje de scroll realizado
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
// Creamos una observable de scroll
const scroll$ = fromEvent(document, 'scroll');

// mediente el operador map calcula el porcentaje del scroll
// mediante el operador tap simplemente se imprime dicho porcentaje 
const progress$ = scroll$.pipe(
    map(event => calularPorcentajeScroll(event)),
    tap(console.log)
);

// Nos subscribimos al observable 
// Se modifica el width del progressBar
progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
});