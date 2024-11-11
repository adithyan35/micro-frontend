import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'home';

  isSidebarOpen = false;

  openLogin() {
    window.open('http://localhost:4201',); 
  }

  openCarousel() {
    window.open('http://localhost:4200',); 
  }

  openListPage() {
    window.open('http://localhost:4202',); 
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
