import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'

import { TodoStoreService } from '../../services/todo-store.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  //styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  _todoStore: TodoStoreService;
  _route: ActivatedRoute;
  _currentStatus = '';

  constructor(todoStore: TodoStoreService, route: ActivatedRoute) {
		this._todoStore = todoStore;
		this._route = route;
		this._currentStatus = '';
	}

  ngOnInit() {
		this._route.params
			.map(params => params.status)
			.subscribe((status) => {
				this._currentStatus = status;
			});
	}

	remove(uid) {
		this._todoStore.remove(uid);
	}

	update() {
		this._todoStore.persist();
	}

	getTodos() {
		if (this._currentStatus == 'completed') {
			return this._todoStore.getCompleted();
		} else if (this._currentStatus == 'active') {
			return this._todoStore.getRemaining();
		} else {
			return this._todoStore.todos;
		}
	}

	allCompleted() {
		return this._todoStore.allCompleted();
	}

	setAllTo(toggleAll) {
		this._todoStore.setAllTo(toggleAll.checked);
	}

}
