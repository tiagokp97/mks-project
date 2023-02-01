export interface ProductInterface {
    id: number,
    name: string,
    brand: string,
    description: string,
    price: number,
    photo: string
}

export interface ProductCart {
    id: number,
    name: string,
    photo: string,
    quantity: number,
    price: number
}

export interface QueryInterface {
    page: string,
    rows: string,
    sortBy: string,
    orderBy: string
}