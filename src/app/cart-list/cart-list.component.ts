import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.services";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.scss"],
})
export class CartListComponent implements OnInit {

  public get cartList() {
    return this._productsService.cartItems;
  }

  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
  }

  deleteFromCart(productId) {
    this._productsService.cartItems = this._productsService.cartItems.filter((item) => {
      return item.id !== productId;
    });
  }
}
