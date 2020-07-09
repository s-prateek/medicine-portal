export class Medicine {
    name: string;
    brand: string;
    price: number;
    quantity: number;
    expiryDate: Date;
    notes: string;

    constructor (
        name: string,
        brand: string,
        price: number,
        quantity: number,
        expiryDate: Date,
        notes: string
    ) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.quantity = quantity;
        this.expiryDate = expiryDate;
        this.notes = notes;
    }
    
}