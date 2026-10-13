const Rational_Numbers = () => {


class Rational {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;

    this.reduce();
  }

  add(rational) {
    const numerator =
      this.numerator * rational.denominator +
      rational.numerator * this.denominator;

    const denominator =
      this.denominator * rational.denominator;

    return new Rational(numerator, denominator);
  }

  sub(rational) {
    const numerator =
      this.numerator * rational.denominator -
      rational.numerator * this.denominator;

    const denominator =
      this.denominator * rational.denominator;

    return new Rational(numerator, denominator);
  }

  mul(rational) {
    const numerator =
      this.numerator * rational.numerator;

    const denominator =
      this.denominator * rational.denominator;

    return new Rational(numerator, denominator);
  }

  div(rational) {
    const numerator =
      this.numerator * rational.denominator;

    const denominator =
      this.denominator * rational.numerator;

    return new Rational(numerator, denominator);
  }

  abs() {
    return new Rational(
      Math.abs(this.numerator),
      Math.abs(this.denominator)
    );
  }

  exprational(n) {
    if (n === 0) {
      return new Rational(1, 1);
    }

    if (n > 0) {
      return new Rational(
        this.numerator ** n,
        this.denominator ** n
      );
    }

    return new Rational(
      this.denominator ** Math.abs(n),
      this.numerator ** Math.abs(n)
    );
  }

  expreal(x) {
 return Math.round( x ** (this.numerator / this.denominator))
  }

  reduce() {
    let a = Math.abs(this.numerator);
    let b = Math.abs(this.denominator);

    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    const gcd = a;

    this.numerator /= gcd;
    this.denominator /= gcd;

    if (this.denominator < 0) {
      this.numerator *= -1;
      this.denominator *= -1;
    }

    return this;
  }
}



    return (
        <div onClick={() => console.log(new Rational(4, 3).expreal(8))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            idk
        </div>
    )
}

export default Rational_Numbers