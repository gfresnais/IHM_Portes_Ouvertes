import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'choix-guide', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'valider-visite',
    loadChildren: () => import('./valider-visite/valider-visite.module').then( m => m.ValiderVisitePageModule)
  },
  {
    path: 'mon-itineraire',
    loadChildren: () => import('./mon-itineraire/mon-itineraire.module').then( m => m.MonItinerairePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
  },
  {
    path: 'renseignement',
    loadChildren: () => import('./renseignement/renseignement.module').then( m => m.RenseignementPageModule)
},
{
path: 'personnaliser-visite',
loadChildren: () => import('./personnaliser-visite/personnaliser-visite.module').then( m => m.PersonnaliserVisitePageModule)
},
{
path: 'se-reperer',
loadChildren: () => import('./se-reperer/se-reperer.module').then( m => m.SeRepererPageModule)
},
{
path: 'choix-guide',
loadChildren: () => import('./choix-guide/choix-guide.module').then( m => m.ChoixGuidePageModule)
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
