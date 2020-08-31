import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../../services/todo-store.service';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  //styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  _todoStore = null;
  
  constructor(todoStore:TodoStoreService) {
		this._todoStore = todoStore;
	}

  ngOnInit(): void {
  }

  removeCompleted() {
		this._todoStore.removeCompleted();
  }
  
  getCount() {
		//return this._todoStore.todos.length;
		return 2;
	}

	getRemainingCount() {
		return this._todoStore.getRemaining().length;
	}

	hasCompleted() {
		return this._todoStore.getCompleted().length > 0;
	}
}
