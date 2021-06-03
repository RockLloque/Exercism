const euclidean_gcd = (a, b) => {
	a = Math.abs(a)
	b = Math.abs(b)
	while(b) {
		[a, b] = [b, a%b]
	}
	return a
}

export class Rational {
  constructor(n,d) {
    this.numerator =d<0 ? -n :n;
    this.denominator = d<0 ? -d :d;
  }

  add(num) {
    return new Rational(num.numerator* this.denominator + num.denominator*this.numerator,  this.denominator * num.denominator).reduce();
  }

  sub(num) {
    return new Rational(num.denominator*this.numerator - num.numerator* this.denominator ,  this.denominator * num.denominator).reduce();
  }

  mul(num) {
    return new Rational(this.numerator*num.numerator, this.denominator * num.denominator).reduce();
  }

  div(num) {
    return new Rational(this.numerator*num.denominator, this.denominator * num.numerator).reduce();
  }

  abs() {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(p) {
    return new Rational(Math.pow(this.numerator,p), Math.pow(this.denominator, p)).reduce();
  }

  expreal(num) {
    return Math.pow(Math.pow(num, 1/this.denominator), this.numerator);
  }

  reduce() {
    const gdc = euclidean_gcd(this.numerator, this.denominator);
    return new Rational(this.numerator/gdc, this.denominator/gdc);
  }
}
