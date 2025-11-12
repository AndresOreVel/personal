import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentImage: string = '../../assets/images/more.png';
  menuActive: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  scrollToSection(sectionId: string) {
    this.document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  toggleButton() {
    this.menuActive = !this.menuActive;
    if (this.currentImage === '../../assets/images/more.png') {
      this.currentImage = '../../assets/images/close.png';
    } else {
      this.currentImage = '../../assets/images/more.png';
    }
  }

  @HostListener('window:resize', [])
  onResize(){
    if(window.innerWidth > 540 && this.menuActive){
      this.menuActive = false;
    }
  }
}