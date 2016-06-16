import {Component, Input} from 'angular2/core';
import { Hero } from './hero';

@Component({
	selector: 'hero-detail',
	template: `
		<div *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
	    	<div>
	    		<label>Id:</label> {{hero.id}}
	    	</div>
	    	<div>
	    		<label>Name:</label> 
	    		<input type="text" [(ngModel)]="hero.name" placeholder="name">
	    	</div>
    	</div>
	`
})
export class HeroDetailComponent {
	@Input()
	hero: Hero;
};