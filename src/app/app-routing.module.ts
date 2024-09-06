import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {StatisticsPageComponent} from "./pages/statistics-page/statistics-page.component";
import {ArticlesPageComponent} from "./pages/articles/articles-page/articles-page.component";
import {NewArticleComponent} from "./pages/articles/new-article/new-article.component";
import {MouveStockComponent} from "./pages/mouvement-stock/mouve-stock/mouve-stock.component";
import {ClientComponent} from "./pages/clients/customers-page/client.component";
import {SupplierComponent} from "./pages/fournisseurs/supplier/supplier.component";
import {AddCustomerSupplierComponent} from "./components/clients-fournisseurs/add-customer-supplier/add-customer-supplier.component";
import {ClientFourfisseurComponent} from "./pages/commandes/client-fourfisseur/client-fourfisseur.component";
import {
  NewCustomerSupplierOrderComponent
} from "./components/orders/new-customer-supplier-order/new-customer-supplier-order.component";
import {CategoriesPageComponent} from "./pages/categories/categories-page/categories-page.component";
import {NewCategoryComponent} from "./components/categories/new-category/new-category.component";
import {UsersPageComponent} from "./pages/users/users-page/users-page.component";
import {NewUserPageComponent} from "./pages/users/new-user-page/new-user-page.component";
import {PageProfileComponent} from "./pages/profil/page-profile/page-profile.component";
import {ChangePasswordComponent} from "./pages/profil/change-password/change-password.component";


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  {path: '', component: DashboardComponent, children: [
      {
        path: 'statistic',
        component: StatisticsPageComponent
      },
      {
        path: 'articles',
        component: ArticlesPageComponent
      },
      {
        path: 'new-article', component:
        NewArticleComponent
      },
      {
        path: 'movement-stock',
        component: MouveStockComponent
      },
      {
        path: 'clients',
        component: ClientComponent
      },
      {
        path: 'add-customer',
        component: AddCustomerSupplierComponent
      },
      {
        path: 'order-customer',
        component: ClientFourfisseurComponent,
        data: {
          origin: 'clients'
        }
      },
      {
        path: 'new-customer-order',
        component: NewCustomerSupplierOrderComponent,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'suppliers',
        component: SupplierComponent
      },
      {
        path: 'add-supplier',
        component: AddCustomerSupplierComponent
      },
      {
        path: 'order-supplier',
        component: ClientFourfisseurComponent,
        data: {
          origin: 'fournisseurs'
        }
      },
      {
        path: 'new-supplier-order',
        component: NewCustomerSupplierOrderComponent,
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'categories',
        component: CategoriesPageComponent
      },
      {
        path: 'new-category',
        component: NewCategoryComponent
      },
      {
        path: 'users',
        component: UsersPageComponent
      },
      {
        path: 'new-user',
        component: NewUserPageComponent
      },
      {
        path: 'profile',
        component: PageProfileComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
