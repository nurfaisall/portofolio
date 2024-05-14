import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  [x: string]: any;
  constructor() {
    console.log('hello world');
  }

  items: any[] = [
    { title: 'Tentang saya', link: '#hero-about' },
    { title: 'Services', link: '#services' },
    { title: 'Portofolio', link: '#portofolio' },
  ];

  isHamburgerActive = false;

  hamburgerButton() {
    this.isHamburgerActive = !this.isHamburgerActive;
    console.log(this.isHamburgerActive);
  }

  smoothScroll(target: any) {
    const element = document.querySelector(target);
    if (element) {
      this.isHamburgerActive = false;
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  }
}
