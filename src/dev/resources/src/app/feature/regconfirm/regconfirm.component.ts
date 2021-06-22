import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { AppGlobals } from '../../app.global';
import { Router,ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, EmailValidator  } from '@angular/forms';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-regconfirm',
  templateUrl: './regconfirm.component.html',
  styleUrls: ['./regconfirm.component.css']
})

//export class RegconfirmComponent implements OnInit {


  
export class RegconfirmComponent implements OnInit {
  regconfirmForm: FormGroup;
    submitted = false;  
    userName : string;
    confirmationCode: string;
    newuserConfirmationValidation: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.queryParams.subscribe(params => {
        this.userName=params.userName; // popular4
      
   });

    this.regconfirmForm = this.formBuilder.group({   
    
      confirmationCode: ['', Validators.required],
      userName: ['', Validators.required]
  
  });
  
     
      
    
  }
  get f() { return this.regconfirmForm.controls; }
  
  onSubmit() {
    // console.log(this.firstName + this.password);
    
       this.submitted = true;
       if (this.regconfirmForm.valid) {
         console.log (this.confirmationCode);
        this.authService.signUpConfirm(this.userName,this.confirmationCode)
        .subscribe(
            data => {
           
              this.router.navigate(['/login'],{ queryParams: { usernamelogin: this.userName } });
            
            },
            error => {
              
                      this.newuserConfirmationValidation="Invalid verification code";
              
            });
          return;
          }
    
       
  }
}
