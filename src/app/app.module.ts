import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { MenutopComponent } from './principal/menutop/menutop.component';
import { ComprComponent } from './principal/compr/compr.component';
import { ComplComponent } from './principal/compl/compl.component';
import { CompfootComponent } from './principal/compfoot/compfoot.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MenutopComponent,
    ComprComponent,
    ComplComponent,
    CompfootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
