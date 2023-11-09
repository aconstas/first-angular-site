import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
  imports: [ HttpClientModule ],
  // provider gets these ready for use at runtime, like a chef
  providers: [DataService, SorterService],
})
export class CoreModule {}

// Normally, you'd import the core module directly where you'd need it.
// But it's possible that as this app grows, that there might be other features
// that need DataService or SorterService. So, import this module at the root (app.module.ts).
// The providers will stay at the root level by default. Any other odules that load under the root
// will also have access to the providers.
