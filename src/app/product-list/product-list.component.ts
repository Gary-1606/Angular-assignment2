import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ProductsService } from "../services/products.services";
import { Router } from "@angular/router";
import { Product } from '../models/cartproducts';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {
  private singleProduct;
  cartCountItems: number = 0;
  editProductItem: any[];

  public get productList(): Array<any> {
     return this._productsService.productItems;
  }
  constructor(
    private _productsService: ProductsService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  
  ngOnInit() {
    this.cartCountItems = this._productsService.cartItems.length; 
  }

  onViewCartClick() {
    this.router.navigate(["/cart"]);
  }

  // Adding To Cart Items
  addToCart(productId) {
    this.singleProduct = this.productList.filter((item) => {
      return item.id === productId;
    });
    this.cartCountItems++;
    this._productsService.addProductToCart(this.singleProduct[0]);
  }

  // Deleting Item
  deleteFromProductList(productId) {
    this._productsService.productItems = this._productsService.productItems.filter(item => {
      return item.id !== productId;
    });
  }

  editProduct(productId) {
    this.editProductItem = this._productsService.productItems.filter(item => {
      return item.id === productId;
    })
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.componentInstance.editProduct = this.editProductItem[0];
  }

  addCartItem() {
     this.dialog.open(ModalComponent);
  }

}
