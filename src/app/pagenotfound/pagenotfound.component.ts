import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pagenotfound',
	templateUrl: './pagenotfound.component.html',
	styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {

	pagina: string = "";

	constructor(private router: Router){}
	  
	  ngOnInit() {
        this.pagina = this.router.url;
        console.log(this.router.url);
    }
  }

