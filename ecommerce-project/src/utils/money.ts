export function priceFormater(price: number) {
   return `$${(price / 100).toFixed(2)}`;
}
