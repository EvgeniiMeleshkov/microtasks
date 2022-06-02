export type MessageType = {
    message: string
}
export let messages: Array<MessageType> = [
    {message: 'message example'},
    {message: 'message example 42'},
]
//------------------------------------
export type CarType = {
    manufacturer: string
    model: string
}
export const topCars: Array<CarType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]