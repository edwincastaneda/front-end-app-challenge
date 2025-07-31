import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/products/products.component').then(
            (m) => m.ProductsComponent,
          ),
      },
    ],
  },
];
