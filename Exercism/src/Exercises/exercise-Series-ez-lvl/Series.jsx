const Series = () => {

class Series {
   constructor(series) {
    this.digits = series.split('').map(Number);
  }

  slices(n) {
    if (n < 0) {
      throw new Error('slice length cannot be negative');
    }
    if (n === 0) {
      throw new Error('slice length cannot be zero');
    }
    if (this.digits.length === 0) {
      throw new Error('series cannot be empty');
    }
    if (n > this.digits.length) {
      throw new Error('slice length cannot be greater than series length');
    }

    const result = [];
    for (let i = 0; i <= this.digits.length - n; i++) {
      result.push(this.digits.slice(i, i + n));
      }
      
    return result;
  }
    }

    const input = "35";
    const show = new Series(input);

  return (
       <div onClick={() => console.log(show.slices(2))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
  )
}
export default Series