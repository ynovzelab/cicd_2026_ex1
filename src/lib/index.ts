export function calculatedDiscount(price: number, discount: number): number {
  if (discount < 0 || discount > 100) {
    throw new Error("Discount must be between 0 and 100");
  }
  return price - (price * discount) / 100;
}

// should return an error if price is negative
// should return an error if discount is negative
// if discount is between 0 and 100, should return the discounted price
// should return an error if price is not a number
// should return an error if discount is not a number
// should return the original price if discount is 0
