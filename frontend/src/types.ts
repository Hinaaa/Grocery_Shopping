export type Product = {
    "id": string,
    "name": string,
    "description": string,
    "category": string,
    "unit": string,
    "price": number
}

export type CartItemType = {
    "id": string,
    "name": string,
    "unit": string,
    "price": number,
    "quantity": number,
    "total": number
}

export type CountType = {
    productId: string,
    count: number
}

export type OrderPayload = {
    orderId: string,
    orderItemList: CountType[]
    totalPrice: number
    userId: string,
}
