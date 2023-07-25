export type OrderBookingType = {
    customerId: number | null;
    nameSender: string;
    phoneSender: string;
    locationSender: LocationType;
    nameReceiver: string;
    phoneReceiver: string;
    locationReceiver: LocationType;
    vehicle: VehicleType;
    note: string;
    rollBack: boolean;
    driverId: number | null;
    price: number;
    discount: DiscountType;
    totalPrice: number;
    isWho: 'sender' | 'receiver';
  };
  
  export type LocationType = {
    address: string;
    coordinate: {
      latitude: number | null;
      longitude: number | null;
    };
  };
  
  export type VehicleType = {
    vehicleId: number | null;
    vehicleName: string;
    weight: number | null;
  };
  
  export type DiscountType = {
    discountId: number | null;
    discountCode: string;
    discountPercentage: number | null;
    discountMoney: number | null;
  };

  export type OrderBookingPayload = {
    fromAddress: string,
    fromLatitude: number | null,
    fromLongitude: number | null,
    toAddress: string,
    toLatitude: number | null,
    toLongitude: number | null,
    customerNote: string,
    backTo: boolean,
    distance: number | null,
    price: number | null,
    priceDiscount: number | null,
    totalPrice: number | null,
    customerId: number | null,
    driverId: number | null,
    discountId: number | null,
  }