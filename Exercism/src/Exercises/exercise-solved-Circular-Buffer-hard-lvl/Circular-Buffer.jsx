
const Circular_Buffer = () => {

    class CircularBuffer{
        constructor(value) {
            this.value = value;
            this.counterWrite = 0;
            this.counterRead = 0;

            this.array =  Array.from({ length: this.value }, () => "");
        }
        
        write(input) {
            if (this.counterWrite + (this.value > 1 ? 1 : 0) <= this.value) this.array[this.counterWrite] = input

            if (this.counterWrite >= this.value && this.value > 2) {
                this.array[1] = input;
                this.counterRead--
            }
            
            this.counterWrite++;

            if (this.counterWrite > this.value && !this.array.includes("")) throw new BufferFullError();
        }

        read() {
            if (this.array.every((item) => item === "")) throw new BufferEmptyError()
            const cloneArray = [...this.array];

            const res = cloneArray[this.counterRead];
            this.array[this.counterRead] = "";
            this.counterRead++;

            if (res == null) throw new BufferEmptyError();    
            return res
        }

        clear() {
            this.array = Array.from({ length: this.value }, () => "");
            this.counterWrite = 0;
        }

        forceWrite(input) {
            if (this.counterWrite < this.value) this.write(input)
            else {
                this.array.reverse();
                this.array[this.array.length - 1] = input;
            }
        }
    }

    class BufferFullError extends Error {
        constructor() {
            super('Buffer is full');
            this.name = 'BufferFullError';
        }
    }

    class BufferEmptyError extends Error {
        constructor() {
            super('Buffer is empty');
            this.name = 'BufferEmptyError';
        }
    }

    const buffer = new CircularBuffer(3);
    return (
        <div onClick={() => console.log(buffer.read())} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            idk
        </div>
    )
}
export default Circular_Buffer