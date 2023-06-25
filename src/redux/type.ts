export type OrderType = {
    customerId: string,
    nameSender: string,
    phoneSender: string,
    locationSender: LocationType,
    nameReceiver: string,
    phoneReceiver: string,
    locationReceiver: LocationType,
    vehicleId: number|null,
    note: string,
    discountCode: string,
    rollBack: boolean,
    driverId: number|null,
    price: number,
    discount: number,
    totalPrice: number,
    isWho: 'sender'|'resceiver'
}

export type LocationType = {
    address: string,
    coordinate: {
        latitude: number|null,
        longitude: number|null
    }
}