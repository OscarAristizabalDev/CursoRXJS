import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'klerith';

// el forkJoin sirve para realizar peticiones simultaneas a diferentes apis
forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ).pipe(
        catchError(err => of([])), // en caso de presentar algun error en esta petición, capturamos el error y lo retornamos
        // con un observable que tiene un arreglo vacio
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    )

}).pipe(
    catchError(err => of(err.message)), // en caso de presentar algun error en una petición, capturamos el error y lo retornamos con un observable
).subscribe(console.log);