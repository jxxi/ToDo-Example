import { Component } from '@angular/core';
import { TodoStoreService } from '../../services/todo-store.service';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent /*implements OnInit*/ {
  newTodo = '';
  _todoStore: TodoStoreService;

  constructor(todoStore:TodoStoreService) {
		this._todoStore = todoStore;
	}

  /*ngOnInit(): void {
  }*/

  addTodo() {
		if (this.newTodo.trim().length) {
			this._todoStore.add(this.newTodo);
			this.newTodo = '';
		}
	}

}
