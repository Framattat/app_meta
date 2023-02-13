import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	nome_utente: string= "luke";
	password_utente: string= "skywalker";
	avviso: string= "";
  	constructor( private router: Router){}

	onSubmit(form:any){
		/*	Non è richiesto dalle specifiche, ma potremmo rendere l'input del nome utente 
			"trimmato" da possibili spazi e renderli tutti minuscoli con le funzioni .trim() e .toLowerCase(), 
			così se un utente ha come username Paolo, quando lo imposterò sul database risulterà paolo, 
			e tutte le volte che cerca di accedere, se usasse "Paolo, paolo, paolo , etc." può sempre accedere.
		*/
		if (form.value.username == this.nome_utente && form.value.password == this.password_utente){
			this.router.navigateByUrl('/pianeti');
		} else {
			this.avviso="I dati inseriti non sono corretti, registrati per usufruire dei nostri servizi";
			console.log(form.value);
			return;
		}
	}
}
