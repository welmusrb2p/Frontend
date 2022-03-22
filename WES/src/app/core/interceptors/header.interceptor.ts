import { Injectable,Injector } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    
  constructor(private globalService: GlobalService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwtToken:any  = this.globalService.getCurrentUserInfo()?.accessToken;

    if(this.globalService.isLogedIn())
    {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${jwtToken}`,
            },
          });
        }
        return next.handle(request);
  }
}
