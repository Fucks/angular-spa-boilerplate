import { Component, ChangeDetectorRef } from '@angular/core';
import GlobalConfig from './../config/root.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'root';
  routes = [];

  constructor(private changesDetectorRef: ChangeDetectorRef) {
    this.routes = GlobalConfig.routes;
    GlobalConfig.subscribe(e => {
      this.routes = e;
      this.changesDetectorRef.detectChanges()
    });
  }

  addRoute = () => {
    GlobalConfig.addRoutes({
      name: 'Home',
      prefix: '/portal'
    })
  }
}
