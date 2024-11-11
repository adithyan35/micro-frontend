import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false; // To indicate loading state
  errorMessage: string = ''; // To hold error messages


  onSubmit(): void {
   
  }

}
