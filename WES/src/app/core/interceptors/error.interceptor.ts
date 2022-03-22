import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/userManagement/services/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
     private injector: Injector
    ,private authenticationService: AuthenticationService
    ,private toastr: ToastrService
    ,private translate: TranslateService
    ,private router:Router
  ) { }

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((err) => {
        const errorMessage = this.getErrorMessage(err);
        switch (err instanceof HttpErrorResponse && err.status) {

          case 401:
           this.toastr.error(this.translate.instant('Please login again'))
           this.authenticationService.logout();
           this.router.navigate(['login']);
           break;

            case 403:
              this.router.navigate(['unauthorized']);
              break;

          case 404:
            this.toastr.error(this.translate.instant('no-data-found'))
            break;
        }

        return throwError(errorMessage || 'Server Error !');
      })
    );
  }

  getErrorMessage(err:any) {
    let message = '';
    if (err.error && err.error.errors) {
      err.error.errors.Body.forEach((m:any) => {
        message += m;
        message += '<br/>';
      });
    } else if (err.error && err.error.message) {
      message = err.error.message;
    } else {
      message = err.message || 'Internal server error!';
    }

    return message;
  }
}
