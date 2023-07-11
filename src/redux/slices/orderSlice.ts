import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { OrderType } from '../type';

const initialState: OrderType = {
  customerId: '',
  nameSender: '',
  phoneSender: '',
  locationSender: {
    address: '',
    coordinate: {
      latitude: null,
      longitude: null,
    },
  },
  nameReceiver: '',
  phoneReceiver: '',
  locationReceiver: {
    address: '',
    coordinate: {
      latitude: null,
      longitude: null,
    },
  },
  vehicle: {
    vehicleId: null,
    vehicleName: '',
    weight: null,
  },
  note: '',
  rollBack: false,
  discount: {
    discountId: null,
    discountCode: '',
    discountPercentage: 0,
    discountMoney: 0,
  },
  price: 0,
  driverId: null,
  totalPrice: 0,
  isWho: 'sender',
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    setInfoOrder(state, action: PayloadAction<OrderType>) {
      (state.customerId = action.payload.customerId),
        (state.nameSender = action.payload.nameSender),
        (state.phoneSender = action.payload.phoneSender),
        (state.locationSender.address = action.payload.locationSender.address),
        (state.locationSender.coordinate.latitude =
          action.payload.locationSender.coordinate.latitude),
        (state.locationSender.coordinate.longitude =
          action.payload.locationSender.coordinate.longitude),
        (state.nameReceiver = action.payload.nameReceiver),
        (state.phoneReceiver = action.payload.phoneReceiver),
        (state.locationReceiver.address =
          action.payload.locationReceiver.address),
        (state.locationReceiver.coordinate.latitude =
          action.payload.locationReceiver.coordinate.latitude),
        (state.locationReceiver.coordinate.longitude =
          action.payload.locationReceiver.coordinate.longitude);
    },
    setVehicle(state, action) {
      state.vehicle.vehicleId = action.payload.vehicleId;
      state.vehicle.vehicleName = action.payload.vehicleName;
      state.vehicle.weight = action.payload.weight;
    },
    setAdditionalOrder(state, action) {
      (state.note = action.payload.note),
        (state.discount.discountCode = action.payload.discountCode),
        (state.discount.discountId = action.payload.discountId),
        (state.discount.discountPercentage = action.payload.discountPercentage),
          (state.rollBack = action.payload.rollBack)
    },
    setIsWho(state, action) {
      state.isWho = action.payload.isWho;
    },
    setLocationSender(state, action) {
      (state.locationSender.address = action.payload.address),
        (state.locationSender.coordinate.latitude = action.payload.latitude),
        (state.locationSender.coordinate.longitude = action.payload.longitude);
    },
    setLocationReceiver(state, action) {
      (state.locationReceiver.address = action.payload.address),
        (state.locationReceiver.coordinate.latitude = action.payload.latitude),
        (state.locationReceiver.coordinate.longitude =
          action.payload.longitude);
    },
    setDriver(state, action) {
      state.driverId = action.payload.driverId;
    },
    setPrice(state, action) {
      state.price = action.payload.price;
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const {
  setInfoOrder,
  setVehicle,
  setAdditionalOrder,
  setIsWho,
  setLocationSender,
  setLocationReceiver,
  setDriver,
  setPrice,
  setTotalPrice,
} = orderSlice.actions;

export default orderSlice.reducer;
