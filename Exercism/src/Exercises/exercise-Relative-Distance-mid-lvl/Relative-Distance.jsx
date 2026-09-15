const Relative_Distance = () => {
    const degreesOfSeparation = (familyTree, personA, personB) => {
        let fristPerson = personA;
        let secendPerson = personB;
        let counterLopp = 0;
        const listFamyliPersonA = [];
        const listFamyliPersonB = [];

        while (Object.keys(familyTree).length <=2 ? counterLopp < 3 : true) {
            for (const i in familyTree) {
                for (const c in familyTree[i]) {
                    if (familyTree[i][c] === fristPerson) {
                        fristPerson = i;
                        listFamyliPersonA.push(fristPerson)
                    }
                    if (familyTree[i][c] === secendPerson) {
                        secendPerson = i;
                        listFamyliPersonB.push(secendPerson)
                    }
                }
            }
            if (listFamyliPersonA[listFamyliPersonA.length - 1] === listFamyliPersonB[listFamyliPersonB.length - 1]) {
                break;
            }
            counterLopp++;
        }
        const res = [...new Set([...listFamyliPersonA, ...listFamyliPersonB])].length;
       
        return res === 0 ? -1 : res;
    }
    const familyTree = {
        Vera: ['Tomoko'],
        Tomoko: ['Aditi'],
    }

    const personA = "Vera"
    const personB = "Tomoko";

    return (
        <div onClick={() => console.log(degreesOfSeparation(familyTree, personA, personB))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me if you want
        </div>
    )
}
export default Relative_Distance