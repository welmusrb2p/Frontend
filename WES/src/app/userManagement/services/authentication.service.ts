
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "src/app/core/services/global.service";
import endPionts from "../endPionts";
import { CurrentUser } from "../models/current-user.model";
import { LoginModel } from "../models/login.model";

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    constructor(
        private httpClient: HttpClient
        , private globalService: GlobalService 
        , private router: Router){}

    login(loginModel :LoginModel){
        
     return this.httpClient.post<CurrentUser>(endPionts.Auth.login,loginModel);

    }
    
    logout(){
        
        this.globalService.removeCurrentUserInfo();
        this.router.navigate(['/login']);

    }

    
}