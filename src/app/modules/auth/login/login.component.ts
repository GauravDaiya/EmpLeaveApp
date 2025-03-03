import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    const LoginData = this.loginForm.value;
    this.authSrv.LoginEmployee(LoginData).subscribe((LogRes: any) => {
      if (LogRes.result) {
        this.router.navigate(['/dashboard']);
        sessionStorage.setItem('Employee', JSON.stringify(LogRes.data))
      } else {
        alert('Wrong Credentials');
        this.loginForm.reset()
      }
      console.log(LogRes)
    })
  }
}
