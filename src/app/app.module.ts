import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemsComponent } from './views/to-do-items/to-do-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './views/form/form.component';
import { TaskComponent } from './views/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    FormComponent,
    TaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
