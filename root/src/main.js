import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import GlobalConfig from './config/root.config';
import * as singleSpa from 'single-spa';
import GlobalEventDistributor from './config/global-event-distributor';

import modules from './config/modules';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

const globalEventDistributor = new GlobalEventDistributor();

export function hashPrefix(prefix) {
  return function (location) {
    return location.hash.startsWith(`#${prefix}`);
  }
}

export async function loadApp(module) {
  let storeModule = {};
  let customProps = {
    domElementGetter : function() {
      debugger;
      return document.getElementById('bootstraped-apps')
    },
    globalEventDistributor: globalEventDistributor
  };
  let routes = [];

  // try to import the store module
  try {
    storeModule = module.storeURL ? await SystemJS.import(module.storeURL) : { storeInstance: null };
  } catch (e) {
    console.log(`Could not load store of app ${module.name}.`, e);
  }

  // try to import routes module
  try {
    routes = module.routesUrl ? await SystemJS.import(module.routesUrl) : [];
    GlobalConfig.addRoutes(routes.default);
  } catch (e) {
    console.log(`Could not load routes of app ${module.name}.`, e);
  }

  if (storeModule.storeInstance && globalEventDistributor) {
    // add a reference of the store to the customProps
    customProps.store = storeModule.storeInstance;
    // register the store with the globalEventDistributor
    globalEventDistributor.registerStore(storeModule.storeInstance);
  }

  // register the app with singleSPA and pass a reference to the store of the app as well as a reference to the globalEventDistributor
  singleSpa.registerApplication(module.name, () => SystemJS.import(module.path), hashPrefix(module.prefix), customProps);
}

modules.forEach(app => loadApp(app))

singleSpa.start();