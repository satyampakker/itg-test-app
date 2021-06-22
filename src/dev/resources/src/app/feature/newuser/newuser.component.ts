import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { AppGlobals } from '../../app.global';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, EmailValidator  } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})


export class NewuserComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
    firstName :string;
    lastName : string;
    userName : string;
    password : string;
    emailid : string;
    newuserValidation: string;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
   
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userName:['', Validators.required],
      confirmPassword: ['', Validators.required]
  
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
     // console.log(this.firstName + this.password);
     
        this.submitted = true;
       
        // stop here if form is invalid
        if (this.registerForm.valid) {
        
        
          this.authService.signUp(this.firstName,this.lastName, this.emailid, this.userName, this.password)
          .subscribe(
              data => {
          //       data;
//console.log ("testdata values" + JSON.stringify(data));
           
               this.router.navigate(['/regconfirm'],{ queryParams: { userName: this.userName } });
              },
              error => {
                 this.newuserValidation=JSON.stringify(error.message);
                  
              },
              ()=>{

                console.log ('all');
                     
              });
            return;
        }
        
      }
      onReset() {
        this.submitted = false;
        this.registerForm.reset();
        this.router.navigate(['']);
    }
    
}
