import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'todo-input',
	template: 
		`<p>Our new fancy input</p>
		<input type="text" #log-me></input>
		<button (click)="onClick($event, logMe.value)">Log Input</button>`
})
export class TodoInput{
	onClick(e, value) {
		console.log('Event: ', e);
		console.log('Value: ', value);
	}
}