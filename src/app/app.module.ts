import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {ParticlesModule} from 'angular-particle';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    NgbModule.forRoot(),
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
