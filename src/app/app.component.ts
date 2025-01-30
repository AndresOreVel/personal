import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'folio';
  theme: string | undefined;
 

  constructor(private router: Router){}

  ngOnInit(): void {
    this.theme = localStorage.getItem('theme') || 'light';
    this.applyTheme();
  }


  toggleTheme(){
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  applyTheme(){
    if(this.theme === 'dark'){
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      document.getElementById('theme-icon')?.setAttribute('src', '../assets/images/light.png');
    }else{
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      document.getElementById('theme-icon')?.setAttribute('src', '../assets/images/dark.png');
    }
  }
  

}
