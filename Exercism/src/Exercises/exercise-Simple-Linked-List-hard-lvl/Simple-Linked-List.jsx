const Simple_Linked_List = () => {
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null
        }
    }

    class Element {
        constructor(data) {
            let head = null;
            let tail = null;
            this.data = data
            this.head = head;
            this.tail = tail;
            this.create_Linked_List(this.data);
        }

        create_Linked_List(input) {
            const val = Array.isArray(input) ? input.length : input;

            for (let i = val; i > 0; i--) {
                const newNode = new Node(i)
                if (this.head === null) {
                    this.head = newNode;
                    this.tail = newNode;
                } else {
                    this.tail.next = newNode;
                    this.tail = newNode;
                }
            }
        }

        get value() {
            const { value } = this.head;
            return value
        }

        get next() {
            const { next } = this.head;
            return next
        }
    }

    class List {
        constructor(value) {
            const ifIsArray = Array.isArray(this.value);
            const array = [];
            const lastIndex = this.array.length - 1;
            
            this.value = value;
            this.array = array;
            this.lastIndex = lastIndex;
            this.ifIsArray = ifIsArray;

            if (this.ifIsArray ) this.array =[new Element(this.value)]
        }

        add(input) {
            this.array.push(input);
        }

        get length() {
            if (this.ifIsArray ) return this.value.length
            return this.array.length
        }

        get head() {
            if (this.array.length > 1) {
                this.array[this.lastIndex].head.next = this.array[0];
                return this.array[this.lastIndex]
            }
            return this.array.length === 0 ? null : this.array[this.lastIndex]
        }

        toArray() {
            return this.ifIsArray  ? this.value.reverse() : false;
        }

        reverse() {
            this.value.reverse();
            return this
        }
    }

    const list = new List([1,2,3]);
    return (
        <div onClick={() => console.log(list.reverse().toArray())} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            idk
        </div>
    )
}
export default Simple_Linked_List