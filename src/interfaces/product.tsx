export interface ProductCart {
    id: number,
    name: string,
    photo: string,
    quantity: number,
    price: number
}

export interface ProductInterface extends ProductCart {
    brand: string,
}


export interface QueryInterface {
    page: string,
    rows: string,
    sortBy: string,
    orderBy: string
}