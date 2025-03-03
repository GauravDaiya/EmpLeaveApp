import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private loginSrv: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    const LoginData = this.loginForm.value;
    if(LoginData.email == 'g@gmail.com' && LoginData.password == 'g@123') {
      this.router.navigate(['/dashboard']);
      sessionStorage.setItem('user',LoginData.email)
    } else {
      alert('Wrong Credentials');
      this.loginForm.reset()
    }
    console.log(this.loginForm.value);
    // this.loginSrv.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value).subscribe((res) => {
    //   if(res.length) {
    //     this.router.navigate(['/layout'])
    //   } else {
    //     this.loginForm.reset()
    //   }
    // })
  }
}
