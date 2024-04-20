import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      adminID: ["", Validators.required],
      adminPass: ["", Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { adminID, adminPass } = this.loginForm.value;
      this.authService.login(adminID, adminPass).subscribe(
        (response) => {
          // Handle successful login here
          console.log('Login successful', response);
        },
        (error) => {
          // Handle login error here
          console.error('Login failed', error);
        }
      );
    }
  }
}

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class LoginComponentModule { }