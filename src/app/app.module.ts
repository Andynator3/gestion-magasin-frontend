import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticlesPageComponent } from './pages/articles/articles-page/articles-page.component';
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { MouveStockComponent } from './pages/mouvement-stock/mouve-stock/mouve-stock.component';
import { NewArticleComponent } from './pages/articles/new-article/new-article.component';
import { MouveStockDetailsComponent } from './components/articles/mouve-stock-details/mouve-stock-details.component';
import { OrderDetailComponent } from './components/articles/order-detail/order-detail.component';
import { SupplierCustomerDetailComponent } from './components/clients-fournisseurs/supplier-customer-detail/supplier-customer-detail.component';
import { ClientComponent } from './pages/clients/customers-page/client.component';
import { SupplierComponent } from './pages/fournisseurs/supplier/supplier.component';
import { AddCustomerSupplierComponent } from './components/clients-fournisseurs/add-customer-supplier/add-customer-supplier.component';
import { CustomerSupplierOrderDetailsComponent } from './components/orders/customer-supplier-order-details/customer-supplier-order-details.component';
import { CustomerSupplierOrderComponent } from './components/orders/customer-supplier-order/customer-supplier-order.component';
import { ClientFourfisseurComponent } from './pages/commandes/client-fourfisseur/client-fourfisseur.component';
import { NewCustomerSupplierOrderComponent } from './components/orders/new-customer-supplier-order/new-customer-supplier-order.component';
import { CategoriesPageComponent } from './pages/categories/categories-page/categories-page.component';
import { NewCategoryComponent } from './components/categories/new-category/new-category.component';
import { UsersPageComponent } from './pages/users/users-page/users-page.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { NewUserPageComponent } from './pages/users/new-user-page/new-user-page.component';
import { PageProfileComponent } from './pages/profil/page-profile/page-profile.component';
import { ChangePasswordComponent } from './pages/profil/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    DashboardComponent,
    StatisticsPageComponent,
    MenuComponent,
    HeaderComponent,
    ArticlesPageComponent,
    ArticleDetailsComponent,
    PaginationComponent,
    ActionButtonsComponent,
    MouveStockComponent,
    NewArticleComponent,
    MouveStockDetailsComponent,
    OrderDetailComponent,
    SupplierCustomerDetailComponent,
    ClientComponent,
    SupplierComponent,
    AddCustomerSupplierComponent,
    CustomerSupplierOrderDetailsComponent,
    CustomerSupplierOrderComponent,
    ClientFourfisseurComponent,
    NewCustomerSupplierOrderComponent,
    CategoriesPageComponent,
    NewCategoryComponent,
    UsersPageComponent,
    UserDetailsComponent,
    NewUserPageComponent,
    PageProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
