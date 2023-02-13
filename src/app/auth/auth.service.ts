import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	log_fittizio: boolean = true; 
	constructor() { }

	user_auth(){
		return this.log_fittizio;
	}
}
