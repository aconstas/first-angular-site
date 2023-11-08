import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
    // You can declare Pipes, Components, or Directives
    declarations: [ CapitalizePipe ],
    exports: [ CapitalizePipe ]
})

export class SharedModule { }