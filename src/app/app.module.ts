import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {ParticlesModule} from 'angular-particle';
// import {CountUpModule} from 'countup.js-angular2';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    NgbModule.forRoot(),
    ParticlesModule,
    // CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
