import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditStudentModalComponent } from './components/edit-student-modal/edit-student-modal.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Page1Page } from './pages/page1/page1.page';

@NgModule({
  declarations: [AppComponent, Page1Page, HighlightDirective, EditStudentModalComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
