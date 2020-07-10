import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { OnlyLoggedInUsersGuard, UserService } from "./guard/auth.guard";
import { ProductsService } from "./services/products.services";
import { CartListComponent } from "./cart-list/cart-list.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    CartListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService, OnlyLoggedInUsersGuard, ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
