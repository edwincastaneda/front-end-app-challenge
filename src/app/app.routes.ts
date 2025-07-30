import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import {PluginStoreComponent} from './pages/plugin-store/plugin-store.component';

export const routes: Routes = [
  {
    path: '',
    component: PluginStoreComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/plugin-store/plugin-store.component').then(
            (m) => m.PluginStoreComponent
          )
      }
    ]
  }
];
