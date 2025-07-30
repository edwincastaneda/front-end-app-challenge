import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
