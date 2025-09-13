import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.username, this.password)
      .subscribe({
        next: (res) => alert('Registro exitoso'),
        error: (err) => alert('Error: ' + err.error.message)
      });
  }
}
