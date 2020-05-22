export class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }

  kind() {
    if (this.isNull()) {
      throw `Invalid Triangle: ${this.s1} ${this.s2} ${this.s3}`;
    }
    if (this.isInvalid()) {
      throw new Error();
    }
    let kind = 'scalene';
    if (this.isEquilateral()) {
      kind = 'equilateral';
    } else if (this.isIsosceles()) {
      kind = 'isosceles';
    }
    return kind;
  }

  isScalene() {
    return this.s1 !== this.s2 && this.s1 != this.s3 && this.s2 != this.s3;
  }

  isIsosceles() {
    return this.s1 === this.s2 || this.s2 === this.s3 || this.s1 === this.s3;
  }

  isEquilateral() {
    return this.s1 === this.s2 && this.s1 === this.s3;
  }

  isNull() {
    return this.s1 <= 0 && this.s2 <= 0 && this.s3 <= 0;
  }

  isInvalid() {
    return (
      this.s1 + this.s2 < this.s3 || this.s2 + this.s3 < this.s1 || this.s1 + this.s3 < this.s2
    );
  }
}
