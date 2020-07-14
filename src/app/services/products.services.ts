import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  public cartItems: any = [];

  public productItems: any = [
    {
      id: 1,
      name: "Mi LED Smart TV 4A 108 cm (43)",
      price: 22999,
      image:
        "https://rukminim1.flixcart.com/image/832/832/jefzonk0/television/r/a/f/mi-l43m5-ai-original-imaf34hgjzc4xr62.jpeg?q=70",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 2,
      name: "Vu 80cm (32 inch) HD Ready LED TV",
      price: 15999,
      image:
        "https://rukminim1.flixcart.com/image/612/612/jdhp47k0/television/m/6/w/vu-32k160m-original-imaf27fyb4kuayaf.jpeg?q=70",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 3,
      name: "Micromax 81cm (32 inch) HD Ready LED TV",
      price: 11999,
      image:
        "https://rukminim1.flixcart.com/image/612/612/j7f2qvk0/television/5/p/8/micromax-32t8361hd-original-imaexntv64hkgssg.jpeg?q=70",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 4,
      name: "Thomson LED Smart TV B9 Pro 80cm (32)",
      price: 24000,
      image:
        "https://rukminim1.flixcart.com/image/612/612/ji95yfk0/television/g/f/6/thomson-b9-pro-32m3277-original-imaf637gjtzxhhzh.jpeg?q=70",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 5,
      name: "Panasonic 109cm (43 inch) Ultra HD (4K) LED TV",
      price: 41000,
      image:
        "https://rukminim1.flixcart.com/image/612/612/jhuvjww0/television/j/t/a/panasonic-th-43ex480dx-original-imaf5s8fhundck3u.jpeg?q=70",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 6,
      name: "Panasonic 109cm (43 inch) Ultra HD (4K) LED TV",
      price: 15400,
      image:
        "https://rukminim1.flixcart.com/image/612/612/jhuvjww0/television/j/t/a/panasonic-th-43ex480dx-original-imaf5s8fhundck3u.jpeg?q=70",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];

  constructor() {}

  addProductToCart(product) {
    this.cartItems.push(product);
  }
}
