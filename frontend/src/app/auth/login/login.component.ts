import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userdata: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService ) {
  }

  loginForm = this.formBuilder.group({
    email: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required)
  })

  proceedLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
  
      this.authService.login(email!, password!).subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          const user = this.authService.getCurrentUser();
          if (user && user.role === 'Admin') {
            // Redirect to the admin domain
            this.router.navigate(['/admin']);
          } else {
            // Redirect to the user domain
            this.router.navigate(['/user']);
          }
        } else {
          // Handle failed login
        }
      });
    }
  }
}
