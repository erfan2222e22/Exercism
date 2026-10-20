const Binary_Search = () => {  
    const find = (array, target) => {
        let left = 0;
        let right = array.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (array[mid] === target) return mid;
            if (array[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

         throw new Error("Value not in array")
    };

    const array = [1, 2, 3, 4];
    const target = 3;
    
  return (
        <div onClick={() => console.log(find(array,target))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            idk
        </div>
  ) 
}
export default Binary_Search;