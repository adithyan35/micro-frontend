import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigateToMicroFrontend(microFrontend: string) {
    if (microFrontend === 'home') {
      window.location.href = 'http://localhost:4400'; 
    } else if (microFrontend === 'carousel') {
      window.location.href = 'http://localhost:4200';
    } else if (microFrontend === 'login') {
      window.location.href = 'http://localhost:4201';
    } else if (microFrontend === 'listpage') { 
      window.location.href = 'http://localhost:4202';
    }
  }
}
