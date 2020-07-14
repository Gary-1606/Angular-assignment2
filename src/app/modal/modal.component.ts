import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ProductsService } from "../services/products.services";
import { Product } from "../models/cartproducts";
import { MatDialog } from "@angular/material/dialog";
import { FormGroup, FormControl, FormsModule } from "@angular/forms";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Input() editProduct: any;
  model = {
    name: "",
    price: null,
    description: "",
  };
  constructor(
    private _productsService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    if (this.editProduct) {
      this.model.price = this.editProduct.price;
      this.model.description = this.editProduct.description;
    }
  }

  onSubmit() {
    if (this.editProduct) {
      this._productsService.productItems.forEach((item) => {
        if (item.id === this.editProduct.id) {
          item.price = this.model.price;
          item.description = this.model.description;
        }
      });
    } else {
      let addedItem = new Product(
        this.model.name,
        this.model.price,
        this.model.description
      );
      this._productsService.productItems.push(addedItem);
    }
    this.dialog.closeAll();
  }
}
