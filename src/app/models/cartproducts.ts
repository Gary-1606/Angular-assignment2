export class Product {
    public id: number;
    public name: string;
    public price: number;
    public image: string;
    public description: string;

    constructor(name: string, price: number, description: string ) {
        this.id = Math.ceil(Math.random()*(Math.pow(10,7)));
        this.name = name;
        this.price = price;
        this.image = "https://rukminim1.flixcart.com/image/612/612/ji95yfk0/television/g/f/6/thomson-b9-pro-32m3277-original-imaf637gjtzxhhzh.jpeg?q=70";
        this.description = description;
    }
}