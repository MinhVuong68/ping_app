export type OrderType = {
    customerId: string,
    nameSender: string,
    phoneSender: string,
    locationSender: LocationType,
    nameReceiver: string,
    phoneReceiver: string,
    locationReceiver: LocationType,
    vehicle: VehicleType,
    note: string,
    rollBack: boolean,
    driverId: number|null,
    price: number,
    discount: DiscountType,
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

export type VehicleType = {
    vehicleId: number|null,
    vehicleName: string,
    weight: number|null,
}

export type DiscountType = {
    discountId: number|null,
    discountCode: string,
    discountPercentage: number|null
}