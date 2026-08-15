export function priceFormater(price) {
   return `$${(price / 100).toFixed(2)}`;
}
