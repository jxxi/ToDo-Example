import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  //styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
	@Input() todo;

  	@Output() itemModified = new EventEmitter();

	@Output() itemRemoved = new EventEmitter();

	editing = false;

	ngOnInit(): void {
	}

	cancelEditing() {
		this.editing = false;
	}

	stopEditing(editedTitle) {
		this.todo.setTitle(editedTitle.value);
		this.editing = false;

		if (this.todo.title.length === 0) {
			this.remove();
		} else {
			this.update();
		}
	}

	edit(todo) {
		this.editing = true;
	}

	toggleCompletion() {
		this.todo.completed = !this.todo.completed;
		this.update();
	}

	remove() {
		this.itemRemoved.next(this.todo.uid);
	}

	update() {
		this.itemModified.next(this.todo.uid);
	}

}
