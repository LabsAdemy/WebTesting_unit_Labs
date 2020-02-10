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

  hasTwoSidesEqual() {
    return this.s1 === this.s2 || this.s1 === this.s3 || this.s2 === this.s3;
  }

  hasAllSidesEqual() {
    return this.s1 === this.s2 && this.s2 === this.s3;
  }

  brakesTriangleRules() {
    return (
      this.s1 + this.s2 < this.s3 || this.s1 + this.s3 < this.s2 || this.s2 + this.s3 < this.s1
    );
  }

  isInvalid() {
    return this.s1 <= 0 || this.s2 <= 0 || this.s3 <= 0;
  }
}
