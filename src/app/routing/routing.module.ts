import { Route, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { NgModule } from '@angular/core';



const routes: Route[] = [
   {path: 'welcome', component: WelcomeComponent},
   {path: '', component: WelcomeComponent, pathMatch: 'full'},
   {path: 'list', component: ProductListComponent},
   {path: '**', component: NotfoundComponent},
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class RoutingModule { }
