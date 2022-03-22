import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { WeaponService } from '../services/weapon.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import constant from '../../../core/utilities/constant';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon-page.component.html',
  styleUrls: ['./weapon-page.component.css']
})
export class WeaponPageComponent implements OnInit {

  isSuccess: boolean = false;

  isShowAlert: boolean = false;

  weaponForm :any;

  categoryDataSource:any=[
     {id:1,name:'category1'}
    ,{id:2,name:'category2'}
    ,{id:3,name:'category3'}
    ,{id:4,name:'category4'}
    ]
  constructor(
    private weaponService:WeaponService
    ,private translate: TranslateService
    ,private toastr: ToastrService
    ,private spinner:NgxSpinnerService
  ) {}

  ngOnInit(): void {

    this.toastr.success('success');

    this.weaponForm =new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      number: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      category:new FormControl('', [
        Validators.required,
        Validators.pattern(constant.Regex.mobileRegex)
       
      ]),
    });
  }
   
  get name() {
    return this.weaponForm.get('name');
  }
  get number() {
    return this.weaponForm.get('number');
  }
  get category() {
    return this.weaponForm.get('category');
  }

  get errorName() {
    return this.name?.hasError('required')
      ? this.translate.instant('RequiredField') : '';
  }

  get errorNumber() {
    return this.number?.hasError('required')
      ? this.translate.instant('RequiredField') : '';
  }
  get errorCategory() {
    return this.category?.hasError('required')
      ? this.translate.instant('RequiredField') : '';
  }


  onSubmit() {

    this.spinner.show();
    // this.toastr.success('success');

    // this.weaponForm.markAllAsTouched();

    // if (this.weaponForm.invalid) {
    //   this.toastr.show('the form invalid');
    //   return;
    // }
    // var weapon = this.weaponForm.value;
    // this.weaponService.addWeapon(weapon).subscribe(
    //   (response) => {
    //     this.toastr.success('the item saved successfuly');
    //   },
    //   (error) => {
    //     this.toastr.error('Error Occured');
    //   }
    // );
  }


}
