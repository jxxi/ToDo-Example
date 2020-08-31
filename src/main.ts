import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'node-uuid';
import 'rxjs';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

import { MainModule } from './main.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MainModule)
  .catch(err => console.error(err));
