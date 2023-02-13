import { Component } from '@angular/core';
import { DbService } from '../db.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-registrazione',
	templateUrl: './registrazione.component.html',
	styleUrls: ['./registrazione.component.css']
})

export class RegistrazioneComponent{

	constructor(private db: DbService, private router: Router) {}

	username_check: string ="";
	flag_username: boolean = false;
	registration_check: string ="";
	URL_meta: string ="http://lab.gruppometa.it/test-js/";

	onSubmit(form:any){
		let endpoint = "registration/";
		console.log(form.value);
		this.db.post(this.URL_meta, endpoint , form.value).subscribe({
			next: (res:any)=>{
				console.log("Server res:", res);
				if (res.status == "success"){
					console.log("Successo della res");
					alert("Utente registrato con successo");
					this.router.navigateByUrl("/pianeti");
				} else {
					console.log("Errore della res");
					this.registration_check = "Errore nella registrazione: " + res.error_message;
				}
			},
			error: (error)=>{
				console.error("Errore nella submit:" , error);
				alert("Sembra che qualcosa sia andato storto!");
			},
		});
	}

	check_username(valore: any){
		let endpoint ="check-username/";
		console.log(valore.target.value);
		this.db.post(this.URL_meta, endpoint, {"username": valore.target.value} ).subscribe({
			next: (res:any)=>{
				console.log("Server res:", res);
				if (res.status == "success"){
					this.flag_username = false;
					console.log("Successo della res");
					this.username_check = "Username valido! (" + valore.target.value + ")";
				} else {
					this.flag_username = true;
					console.log("Errore della res");
					this.username_check = "Errore, lo username: " + valore.target.value + " è già preso!";
				}
			},
			error: (error)=>{
				console.error("Errore nella submit:" , error);
				alert("Sembra che qualcosa sia andato storto!");
			},
		});
	}
}
