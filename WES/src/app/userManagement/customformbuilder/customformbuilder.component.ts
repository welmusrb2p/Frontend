import { Component,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customformbuilder',
  templateUrl: './customformbuilder.component.html',
  styleUrls: ['./customformbuilder.component.scss']
})
export class CustomformbuilderComponent implements OnInit {

  formData:JsonFormControls[]=[];

   myForm:FormGroup=this.fb.group({});

  constructor(private http: HttpClient ,private fb:FormBuilder) {}
  
  ngOnInit(): void {

    this.getJSON().subscribe(data => {

      this.formData=data;
        console.log(data);
        this.createForm(this.formData);
    });
  }

  createForm(controls:JsonFormControls[]){

    for(const control of controls) {

      const validatorstoAdd = [];

      for (const [key,value] of Object.entries(control.validators))
      {
        switch(key){
          case 'min':
            validatorstoAdd.push(Validators.min(value));
            break;

            case 'max':
              validatorstoAdd.push(Validators.max(value));
              break;

              case 'required':
              validatorstoAdd.push(Validators.required);
              break;

              case 'email':
              validatorstoAdd.push(Validators.email);
              break;
        }
      }

      this.myForm.addControl(control.name,this.fb.control(control.value,validatorstoAdd))
    }
  }
  onSubmit(){
    console.log('this.myForm.valid : ',this.myForm.valid);
    console.log('this.myForm.valid : ',this.myForm.value);
  }

  public getJSON(): Observable<JsonFormControls[]> {  
    return this.http.get<JsonFormControls[]>("../../../assets/form-json-data.json");
}
     

  

}

interface JsonFormValidators{
  min?:number;
  max?:number;
  required?:boolean;
  email?:boolean;
  minLength?:number;
  maxLength?:number;
  pattern?:string;
}

interface JsonFormControlOptions{
  min?:string;
  max?:string;
  step?:string;
}

interface JsonFormControls{
  name:string;
  label:string;
  value:string;
  type:string;
  options?:JsonFormControlOptions;
  required:boolean;
  validators:JsonFormValidators;
}
