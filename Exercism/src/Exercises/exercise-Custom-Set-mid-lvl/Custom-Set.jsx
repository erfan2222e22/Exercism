const Custom_Set = () => {
  class CustomSet {
    constructor(data=[]) {
      this.data = data;
      let obj = new Set(data);
      this.obj = obj;
    }

    empty() {
      return this.obj.size === 0
    }

    contains(number) {
      return this.obj.has(number);
    };

    add(input) {
      this.obj.add(input);
      return this
    }

    subset(input) {
      const { data = [] ,obj} = input;

      if (this.obj.size === 0 && obj.size !== 0) return true
      

      const validatin = data.length > this.data.length;
      const fristItemData = validatin ? this.data[0] : data[0];
      const array = validatin ? data : this.data;
      const arrayToString = validatin ? this.data.join("") : data.join("");
      
      const indexOf = array.indexOf(array.filter((item) => item === fristItemData)[0]);

      return array.filter((_, index) => index >= indexOf && index <= indexOf + 3).join("") === arrayToString
  }

    disjoint(input) {
      const { data } = input;
      if (data === this.data) return true;

      const array = [...data];
      array.push(...this.data);
      return new Set(array).size === data.length + this.data.length;
    }

    eql(input) {
      const { obj } = input;
      let res = true;
      if (this.obj.size !== obj.size) return false;
      
    obj.forEach((item) => {
      if (!this.obj.has(item)) res = false
    })

    return res;
  }

  union(input) {
    const { data = [] } = input
    this.obj = new Set([...this.data, ...data]);
    return this
  }

  intersection(input) {
    const { obj } = input;
    const array = [];
    obj.forEach((item) => {
      if (this.obj.has(item)) array.push(item);
    })
    const newObject = new Set(array);

    this.obj = newObject;

    return this
  }

  difference(input) {
    const { obj} = input;
    const array = []

    this.data.forEach((item) => {
      if (!obj.has(item)) array.push(item)
    })

    const newObj = new Set(array);
    this.obj = newObj;

    return this
  }
  }
  
  const show = new CustomSet()
  
  return (
    <div onClick={() => console.log(show.subset(new CustomSet([1])))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            idk
        </div>
  )
}

export default Custom_Set