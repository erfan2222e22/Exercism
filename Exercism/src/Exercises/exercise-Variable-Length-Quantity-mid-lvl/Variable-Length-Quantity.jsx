const Variable_Length_Quantity = () => {
  const encode = (input) => {
    const result = [];

    for (let i = 0; i < input.length; i++) {
      if (input[i] === 0) {
        result.push(input[i]);
        i++;
        if (input.length === 1) break;
      }
      const numberToBinary = input[i].toString(2);
      const hexList = [];

      if (numberToBinary.length === 7) {
        result.push(+("0x" + input[i].toString(16)));
      } else {
        for (let end = numberToBinary.length; end > 0; end -= 7) {
          const start = Math.max(0, end - 7);
          let slice = numberToBinary.slice(start, end);

          if (slice.length < 7) {
            const array = Array.from({ length: 7 - slice.length }, () => "0");
            array.push(slice);
            slice = array.join("");
          }

          if (end !== numberToBinary.length) slice = "1" + slice;
          const binaryToHex = parseInt(slice, 2).toString(16);

          hexList.unshift(
            binaryToHex === "0" ? +binaryToHex : +("0x" + binaryToHex),
          );
          if (start === 0) result.push(...hexList);
        }
      }
    }
    console.log((0x200000).toString(2));
    return result;
  };

  const decode = (input) => {
    if (input.length === 1 && input[0] === 0x7f) return input;
    else if (input.length === 1) throw new Error("Incomplete sequence");

    const hexList = [];
    let result = 0n;

    for (let i = 0; i < input.length; i++) {
      result = (result << 7n) | BigInt(input[i] & 0x7f);
      if (input[i] >>> 7 === 0) {
        const numberToHex = result.toString(16);
        hexList.push(
          numberToHex === "0" ? +numberToHex : +("0x" + numberToHex),
        );
        result = 0;
      }
    } 
    return hexList;
  };

  const input = [0x8f, 0xff, 0xff, 0xff, 0x7f];
  return (
    <div
      onClick={() => console.log(decode(input))}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#0c0c0c",
        color: "#fff",
        textAlign: "center",
        fontSize: "2rem",
        borderRadius: "1rem",
      }}
    >
      test me
    </div>
  );
};

export default Variable_Length_Quantity;