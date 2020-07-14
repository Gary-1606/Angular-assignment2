import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { OnlyLoggedInUsersGuard } from "./guard/auth.guard";
import { CartListComponent } from "./cart-list/cart-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: ProductListComponent,
    // canActivate: [OnlyLoggedInUsersGuard],
  },
  {
    path: "cart",
    component: CartListComponent,
    //canActivate: [OnlyLoggedInUsersGuard],
  },
  {
    path: "**",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
