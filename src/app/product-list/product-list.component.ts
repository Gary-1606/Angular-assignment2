import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ProductsService } from "../services/products.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {
  private singleProduct;
  products: any = [];
  cartCountItems: number = 0;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productsService.getCartDetails().subscribe((data) => {
      this.products = data;
    });
    this.cartCountItems = this.productsService.cartItems.length;
  }

  onViewCartClick() {
    this.router.navigate(["/cart"]);
  }
  addToCart(productId) {
    this.singleProduct = this.products.filter((item) => {
      return item.id === productId;
    });
    this.cartCountItems++;
    this.productsService.addProductToCart(this.singleProduct[0]);
  }
}
