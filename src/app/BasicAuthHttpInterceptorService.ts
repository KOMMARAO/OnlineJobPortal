import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      console.log("Interceptor",sessionStorage.getItem('token'));
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        },
         responseType: 'text'
      })
    }

    return next.handle(req);

  }
}
