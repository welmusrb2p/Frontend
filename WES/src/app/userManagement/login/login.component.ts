import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/core/services/global.service';
import constant from 'src/app/core/utilities/constant';
import { LoginModel } from '../models/login.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required]),
    passWord:new FormControl('',[Validators.required])
  })

  constructor(private translate:TranslateService
       , private toaster:ToastrService
       , private authenticationService:AuthenticationService
       , private globalService: GlobalService
       , private router: Router) { }

  ngOnInit(): void {
  }

  get username(){
    return this.loginForm.get('username');
  }
  get passWord(){
    return this.loginForm.get('passWord');
  }

  get usernameErrorMsg() {
    return this.username?.hasError('required')
      ? this.translate.instant('required-data') : '';
  }
  get passWordErrorMsg() {
    return this.passWord?.hasError('required')
      ? this.translate.instant('required-data') : '';
  }

  onSubmit(){
    debugger;

    this.loginForm.markAllAsTouched();

    if(this.loginForm.invalid)
    {
      this.toaster.error(this.translate.instant('wrong-data'))
      return;
    }
    let loginmodel:LoginModel =this.loginForm.value;

    this.authenticationService.login(loginmodel).subscribe(response =>{

      if(response)
      {
        this.globalService.setCurrentUserInfo(response);
        this.router.navigate(['/'+constant.Path.index]);
      }
      else
      {
        this.toaster.error(this.translate.instant('error-occured'))
          return;
      }
        
    },
     (error)=>{
       this.toaster.error(error.message);
     }
    );

  }

}
