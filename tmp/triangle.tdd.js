/* eslint-disable max-params */
export class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }

  kind() {
    if (this.isInvalid()) {
      throw 'error';
    }
    if (this.brakesTriangleRules()) {
      throw 'error';
    }
    if (this.hasAllSidesEqual()) {
      return 'equilateral';
    }
    if (this.hasTwoSidesEqual()) {
      return 'isosceles';
    }
    return 'scalene';
  }

  isInvalid() {
    const NULL_SIZE = 0;
    return this.s1 <= NULL_SIZE || this.s2 <= 0 || this.s3 <= 0;
  }
  brakesTriangleRules() {
    return (
      this.s1 + this.s2 < this.s3 || this.s1 + this.s3 < this.s2 || this.s2 + this.s3 < this.s1
    );
  }
  hasAllSidesEqual() {
    return this.s1 === this.s2 && this.s2 === this.s3;
  }

  hasTwoSidesEqual() {
    return this.s1 === this.s2 || this.s1 === this.s3 || this.s2 === this.s3;
  }
}
