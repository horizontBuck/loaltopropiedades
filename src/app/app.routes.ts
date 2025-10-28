import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Detail } from './pages/detail/detail';
import { Properties } from './pages/properties/properties';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'LoAlto | Inicio',
    data: {
      description: 'Encuentra propiedades destacadas en LoAlto',
      canonical: '/',
    },
  },
  {
    path: 'detail',
    component: Detail,
    title: 'LoAlto | Detalle de Propiedad',
    data: {
      description: 'Detalle completo de la propiedad seleccionada en LoAlto',
      canonical: '/detail',
    },
  },
  {
    path: 'properties',
    component: Properties,
    title: 'LoAlto | Propiedades',
    data: {
      description: 'Propiedades destacadas en LoAlto',
      canonical: '/properties',
    },
  },
  {
    path: 'dashboard',
    component: Dashboard,
    title: 'LoAlto | Area de administrador',
    data: {
      description: 'Area de administrador en LoAlto',
      canonical: '/dashboard',
    },
  },
  {
    path: '**',
    redirectTo: '', // redirige a inicio si la ruta no existe
    pathMatch: 'full',
  },
];
