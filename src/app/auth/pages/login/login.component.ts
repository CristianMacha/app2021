import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  login() {
    this.authService.login(this.formLogin.value).subscribe(
      (data) => {this.router.navigateByUrl('/backoffice/course')},
      (error) => console.error(error)
    );
  }
}
