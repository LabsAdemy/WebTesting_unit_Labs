export class ExchangeCalculator {
  constructor(rates) {
    this.rates = rates;
  }
  convert(amount, source, target) {
    const rate = this.getRate(source, target);
    const result = amount * rate;
    return result;
  }
  getRate(source, target) {
    if (this.rates) {
      return this.rates[target];
    }
  }
}
