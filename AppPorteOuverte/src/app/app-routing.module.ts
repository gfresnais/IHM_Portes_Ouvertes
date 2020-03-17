import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
<<<<<<< Updated upstream
    path: 'valider-visite',
    loadChildren: () => import('./valider-visite/valider-visite.module').then( m => m.ValiderVisitePageModule)
  },
  {
    path: 'mon-itineraire',
    loadChildren: () => import('./mon-itineraire/mon-itineraire.module').then( m => m.MonItinerairePageModule)
=======
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
>>>>>>> Stashed changes
  },
  {
    path: 'personnaliser-visite',
    loadChildren: () => import('./personnaliser-visite/personnaliser-visite.module').then( m => m.PersonnaliserVisitePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
