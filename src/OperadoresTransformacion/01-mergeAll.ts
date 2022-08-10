import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll } from 'rxjs/operators';

import { GitHubUser } from '../interfaces/github-user-interface';
import { GitHubUsersResponse } from '../interfaces/github-users-interface';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);


//Helpers
const mostrarUsuarios = (usuarios: GitHubUser[]) => {
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login);
        li.append(anchor);

        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500), // una vez se escribe en el input se ejecuta al medio segundo
    map<KeyboardEvent, string>(evento => evento.target['value']), // del objeto KeyboardEvent se toma solo del target el atributo value
    map<string, Observable<GitHubUsersResponse>>(texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    mergeAll(), // el mergeAll se subscribe al observable que retorna el map al utilizar ajax.GetJSON
    map<GitHubUsersResponse, GitHubUser[]>(usuarios => usuarios['items']) // solo obtenemos los valores en el atributo items
).subscribe(mostrarUsuarios)