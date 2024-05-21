// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// const BASIC_URL = ["http://localhost:8080/"]

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private http: HttpClient) { }

//   signup(RegisterRequest: any): Observable<any> {
//     return this.http.post<[]>(BASIC_URL + "api/auth/register", RegisterRequest)
//   }

//   login(loginRequest: any): Observable<any> {
//     return this.http.post<[]>(BASIC_URL + "api/auth/login", loginRequest)
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { __param } from 'tslib';

const BASIC_URL = "http://localhost:9000/";
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  signup(SignupRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "api/auth/signup", SignupRequest).pipe(
      catchError(error => {
        // Handle error, log it, or rethrow
        return throwError(error);
      })
    );
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "api/auth/login", loginRequest).pipe(
      catchError(error => {
        // Handle error, log it, or rethrow
        return throwError(error);
      })
    );
  }
}

function deprecated(target: typeof AuthService): void | typeof AuthService {
  throw new Error('Function not implemented.');
}

