import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [FormsModule]
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
