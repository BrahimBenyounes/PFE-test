import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { StockComponent } from './stock/stock.component';
import { ReglementComponent } from './reglement/reglement.component';
import { SecteurActiviteComponent } from './secteur-activite/secteur-activite.component';
import { OperateurComponent } from './operateur/operateur.component';
import { FactureComponent } from './facture/facture.component';
import { LocalComponent } from './local/local.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { TypevaccineComponent } from './typevaccine/typevaccine.component';
import { SterilizationComponent } from './sterilization/sterilization.component';
import { VeterinarianComponent } from './veterinarian/veterinarian.component';
import { RewardComponent } from './reward/reward.component';
import { LoginComponent } from './login/login.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [

  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },


  {
    path: '',
      component: PageDashboardComponent,
      
      children: [
      { path: 'secteurActivite', component: SecteurActiviteComponent },
      { path: 'operateur', component: OperateurComponent },
      { path: 'facture', component: FactureComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'stock', component: StockComponent },
      { path: 'reglement', component: ReglementComponent },
      { path: 'local', component: LocalComponent },
      { path: 'vaccine', component: VaccineComponent },
      { path: 'typevaccine', component: TypevaccineComponent },
      { path: 'sterilization', component: SterilizationComponent },
      { path: 'veterinarian', component: VeterinarianComponent },
      { path: 'reward', component: RewardComponent },
      { path: '', redirectTo: 'product', pathMatch: 'full' },
             ]

   }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
