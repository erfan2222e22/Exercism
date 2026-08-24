
const Palindrome_Products = () => {

    class Palindromes {
  #minFactor;
  #maxFactor;

  constructor(minFactor, maxFactor) {
    this.#minFactor = minFactor;
    this.#maxFactor = maxFactor;
  }

  static generate({ minFactor, maxFactor }) {
    return new Palindromes(minFactor, maxFactor);
  }

  get smallest() {
    return this.#find('smallest');
  }

  get largest() {
    return this.#find('largest');
  }

  #find(location) {
    if (this.#minFactor > this.#maxFactor) {
      throw new Error('min must be <= max');
    }

    const productToFactors = new Map();

    for (let i = this.#minFactor; i <= this.#maxFactor; i++) {
      for (let j = i; j <= this.#maxFactor; j++) {
        const product = i * j;
        if (Palindromes.#isPalindrome(product)) {
          if (!productToFactors.has(product)) {
            productToFactors.set(product, []);
          }
          productToFactors.get(product).push([i, j]);
        }
      }
    }

    if (productToFactors.size === 0) {
      return { value: null, factors: [] };
    }

    const values = [...productToFactors.keys()];
    const value =
      location === 'smallest' ? Math.min(...values) : Math.max(...values);

    return { value, factors: productToFactors.get(value) };
  }

  static #isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
  }
}
    const minNumber = 1;
    const maxNumber = 9;
    const show = new Palindromes({ minNumber: minNumber, maxNumber: maxNumber });
    
    return (
        <div onClick={() => console.log(show)} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
}
export default Palindrome_Products









