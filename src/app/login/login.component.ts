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

	controllo_login(nome:string, password:string){
		// piccolo controllo su campi vuoti, non importa quale dei due se sto cercando di accedere
		if (nome =='' || password == ''){
			this.avviso="Devi compilare i campi per accedere al servizio";
			return;
		}
		/*	Non è richiesto dalle specifiche, ma potremmo rendere l'input del nome utente 
			"trimmato" da possibili spazi e renderli tutti minuscoli con le funzioni .trim() e .toLowerCase(), 
			così se un utente ha come username Paolo, quando lo imposterò sul database risulterà paolo, 
			e tutte le volte che cerca di accedere, se usasse "Paolo, paolo, paolo , etc." può sempre accedere.
		*/
		if (nome == this.nome_utente && password == this.password_utente){
			this.router.navigateByUrl('/pianeti');
			console.log(this.avviso);
			return;
		}
		// se entrambi i controlli falliscono, l'utente viene avvisato di errori e incitato ad iscriversi
		this.avviso="I dati inseriti non sono corretti, registrati per usufruire dei nostri servizi";
		console.log(this.avviso);
		return;
	}
}
