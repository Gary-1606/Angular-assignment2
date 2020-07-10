import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.services";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.scss"],
})
export class CartListComponent implements OnInit {
  cartListItems: any = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.cartListItems = [...this.productService.cartItems];
  }
}
