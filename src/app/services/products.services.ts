import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { cartProducts } from "../../app/models/cartproducts";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  public cartItems: any = [];

  constructor(private http: HttpClient) {}
  // http response as Observable
  getCartDetails(): Observable<cartProducts[]> {
    return this.http.get<cartProducts[]>("../../assets/data/product.json");
  }

  addProductToCart(product) {
    this.cartItems.push(product);
  }
}
