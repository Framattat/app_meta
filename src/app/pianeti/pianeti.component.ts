import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pianeti',
	templateUrl: './pianeti.component.html',
	styleUrls: ['./pianeti.component.css']
})
export class PianetiComponent  {

	constructor(private db: DbService, private router: Router) {}

	pianeti: any = [];
	pagina_attuale: number = 1;
	btn_indietro: string = "";
	btn_avanti: string = "";
	scorrimento: any = [];
	URL_pianeti: string = "https://swapi.dev/api/planets/";

	get_pianeti(endpoint: string){
		this.db.get(this.URL_pianeti, endpoint).subscribe({
			next: (res:any)=>{
				console.log("Server res:", res);
				this.pianeti = res.results;
				this.scorrimento = [res.previous,res.next];
				console.log(this.scorrimento);
			},
			error: (error)=>{
				console.error("Errore nel caricamento API:" , error);
				alert("Sembra che qualcosa sia andato storto!");
			},
		});
	}
	page_change(endpoint:string){
		var endpoint_finale = endpoint.split("?");
		console.log(endpoint_finale[1]);
		this.get_pianeti("?"+endpoint_finale[1]);
	}

	ngOnInit(){
		this.get_pianeti("?page=1");
	}
}
