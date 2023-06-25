export const convertMeterToKilometer = (meter:number) => {
    return parseFloat((meter / 1000).toFixed(1));
}