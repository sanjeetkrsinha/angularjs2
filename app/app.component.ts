import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <h2>{{writer}}</h2>
    <h3>{{hero.name}} details!</h3>
    <div><label>id:</label>{{hero.id}}<div>
    <div><label>name:</label>
     <input [(ngModel)]="hero.name" placeholder="name">
	</div>`
})
export class AppComponent {
  title='Tours of Heroes';
  writer='Sanjeet';
  hero: Hero ={
	id:1,
	name: 'Wisdom'
  }
}

export class Hero {
    id:number;
    name:string;
}
// Example of two way binding