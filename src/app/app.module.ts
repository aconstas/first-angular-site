import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent }  from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // Our root 'bucket' now knows about 4 imported modules
  imports:      [ BrowserModule, CoreModule, CustomersModule, SharedModule, AppRoutingModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }