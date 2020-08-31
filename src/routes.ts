import { ListComponent } from './app/components/todo-list/todo-list.component';

export let routes = [
  { path: '', component: ListComponent, pathMatch: 'full' },
  { path: ':status', component: ListComponent }
];