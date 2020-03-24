import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'valider-visite/:id',
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
  {
    path: 'burger-menu',
    loadChildren: () => import('./burger-menu/burger-menu.module').then( m => m.BurgerMenuPageModule)
  },
  {
    path: 'pickup-location',
    loadChildren: () => import('./pickup-location/pickup-location.module').then( m => m.PickupLocationPageModule)
  },  {
    path: 'atelier-card',
    loadChildren: () => import('./atelier-card/atelier-card.module').then( m => m.AtelierCardPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
