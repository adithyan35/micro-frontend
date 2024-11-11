import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../home/shared/navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carousel';

  slides = [1, 2, 3, 4, 5, 6];
  visibleSlides: number[] = [];
  slidesPerPage = 3;
  currentSlide = 0
  indicators: number[] = [];

  constructor() {
    this.updateSlides();
  }

  updateSlides() {
    this.visibleSlides = this.slides.slice(this.currentSlide, this.currentSlide + this.slidesPerPage);
    this.indicators = Array(Math.ceil(this.slides.length / this.slidesPerPage)).fill(0);
  }

  jumpToIndicator(index: number) {
    this.currentSlide = index * this.slidesPerPage;
    this.updateSlides();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + this.slidesPerPage) % this.slides.length;
    this.updateSlides();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - this.slidesPerPage + this.slides.length) % this.slides.length;
    this.updateSlides();
  }

  getSlideStyle() {
    return {
      '--slides-per-page': `${this.slidesPerPage}`,
      width: `${this.slidesPerPage * 100}%`,
      transition: 'transform 0.5s ease-in-out',
    };
  }
}
