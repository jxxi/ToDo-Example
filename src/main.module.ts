import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodoStoreService } from './app/services/todo-store.service';
import { AppComponent } from './app/components/app/app.component';
import { ListComponent } from './app/components/todo-list/todo-list.component';
import { FooterComponent } from './app/components/todo-footer/todo-footer.component';
import { HeaderComponent } from './app/components/todo-header/todo-header.component';
import { ItemComponent } from './app/components/todo-item/todo-item.component';
import { routes } from './routes';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		ListComponent,
		FooterComponent,
		HeaderComponent,
		ItemComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes, {
			useHash: true
		})
	],
	providers: [
		TodoStoreService
	]
})
export class MainModule {}
