import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import { CurrentUser } from "src/app/userManagement/models/current-user.model";
import { AppSettings } from "../settings/app-settings";
import constant from "../utilities/constant";

@Injectable()
export class GlobalService {

   private _langObservable = new BehaviorSubject<string>('');

   onLangChanged: Observable<any> = this._langObservable.asObservable();

   langChanged(data:string) {
    this._langObservable.next(data);
  }

   isAR():boolean{

   let currentLang: string=localStorage.getItem('lang') || AppSettings.defaultLang;

   return currentLang == constant.arabic_Code?true:false;

   }

   getLanguage()
   {
      return localStorage.getItem('lang') || AppSettings.defaultLang;
   }

   setLanguage(language:string){

    localStorage.setItem('lang',language);

    this.langChanged(language);

   }

   // ----------------------- User Local Storage ----------------------------------------

   isLogedIn():boolean{

      let currentUser:any=this.getCurrentUserInfo();

      return currentUser && currentUser.accessToken?true:false;
   }
  
   getCurrentUserInfo():CurrentUser|null
   {
      let currentUserStorage:any=localStorage.getItem('currentUser')

      if(!currentUserStorage)
      {
         return JSON.parse(currentUserStorage);
      }

     return null;
   }

   setCurrentUserInfo(currentUser:CurrentUser){

    localStorage.setItem('currentUser',JSON.stringify(currentUser));
   }
   
   removeCurrentUserInfo(){

      localStorage.removeItem('currentUser');
   }

}
