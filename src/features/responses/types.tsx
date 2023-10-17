

export type Response = {
    id: string
    title: string
    description: string
    price: number
    category: string

    amount: number
}

export type DummyItem = {
    id: () => string
    title: () => string
    description: () => string
    price: () => number
    category: () => string

    amount: () => number
}

export type CreateResponseParams = {
    existingResponses?: Map<string, Response>
    count: number
    dummy: DummyItem
}

export type CreateResponses = (
    params: CreateResponseParams,
) => Map<string, Response>

/*
export type Cart = {
    id: string
    title: string
    amount: number
}

export type DummyCart = {
    id: () => string
    title: () => string
    amount: () => number
}
*/