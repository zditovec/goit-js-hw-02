function getShippingCost(country) {
  let priceDelivery;
  switch (country) {
      case `China`:
        console.log (`Shipping to ${country} will cost ${priceDelivery} credits`);
          break;
    case `Chile`:
      console.log (`Shipping to ${country} will cost ${priceDelivery} credits`);
      break;
    case `Australia`:
          console.log(`Shipping to ${country} will cost ${priceDelivery} credits`);
          break;
    case `Jamaica`:
          console.log(`Shipping to ${country} will cost ${priceDelivery} credits`)
          break;
      default:`Sorry, there is no delivery to your country.`
  }
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
