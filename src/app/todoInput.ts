import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoService} from "./todoService";

@Component({
	selector: 'todo-input',
	directives: [FORM_DIRECTIVES],
	template: 
		`<p>Reference Model Paradigm input</p>
		<input type="text" #log-me></input>
		<button (click)="onClick($event, logMe.value)">Log Input</button>
		<p></p>
		<p>Ng-Model Paradigm Input</p>
		<form (ng-submit)="onSubmit()">
			<input type="text" [(ng-model)]="todoModel"> {{ todoModel }}
		</form>
		`
})

// We can add public to the beginning of todoService.  This is a nice short cut.
// Instead of having to create public variable and then assign todoService in
// the constructor to our public variable.
export class TodoInput{
	todoModel;
	
	constructor(public todoService:TodoService) {
		
		
	}
	onClick(e, value) {
		this.todoService.addTodo(value);
		console.log('Todos: ', this.todoService.todos);
	}
	onSubmit() {
		this.todoService.addTodo(this.todoModel);
	}
}