const Sublist = () => {
    class list {
        constructor(fA) {
            this.fA = fA;
            console.log(this.fA)
        }

        compare(sA) {
            const { fA } = sA;
            console.log(fA, this.fA)            

            const faL = this.fA?.length;
            const saL = fA?.length;
            if (fA === this.fA) return "EQUAL";
            
           else if (this.fA == null && fA != null) return "SUBLIST"

            else if (fA == null && this.fA != null)   return "SUPERLIST"
        
            const fToString = this.fA?.join("");
            const sToString = fA?.join("");
            let res = "";
        
            if (faL === saL && fToString === sToString) res = "EQUAL";
               else if (faL === saL && fToString !== sToString) res = "UNEQUAL";
         
            if (faL > saL)
                if (saL === 0  ||this.testing(this.fA, fA, faL, saL)) res = "SUPERLIST"
            
            if (saL > faL)
                if (faL === 0|| this.testing(fA, this.fA, faL, saL)) res = "SUBLIST";
        
            return res === "" ? "UNEQUAL" : res
        }

        testing(fA, sA, faL, saL) {
            let sliceCounter = faL >= saL ? saL : faL;
            let loopCounter = faL >= saL ? faL : saL;
            for (let i = 0; i <= loopCounter; i++) {
                const sliceArray = fA.slice(i, sliceCounter).join("")
                if (sliceArray === sA.join("")) return true;
                sliceCounter++;
            }
            return false
        }

    }

    const show = new list();
    const show2 = new list();


    return (
        <div onClick={() => console.log(show.compare(show2))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            idk
        </div>
    )
}
export default Sublist