import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.formRegister = this.formBuilder.group({
      matricula: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  /**
   * Registro de usaurio
   */
  register() {
    this.authService.register(this.formRegister.value).subscribe(
      (data) => console.log(data),
      (error) => console.error(error)
    );
  }
}
