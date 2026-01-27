import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentImage: string = '../../assets/images/more.png';
  menuActive: boolean = false;
  constructor(@Inject(DOCUMENT)
  private document: Document,
  private router: Router,
  private el: ElementRef
  ) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd),
    takeUntilDestroyed())
    .subscribe(() => {
      this.menuActive = false;
    });
  }

  scrollToSection(sectionId: string) {
    this.document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  get menuIcon(): string {
    return this.menuActive ? '../../assets/images/close.png'
      : '../../assets/images/more.png';
  }

  toggleButton() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 540) {
      this.menuActive = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if(!this.el.nativeElement.contains(event.target)) {
      this.menuActive = false;
    }
  }
}