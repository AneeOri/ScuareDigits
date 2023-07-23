import "./styles.css";

export default function App() {
  const handleInput = (e) => {
    const value = e.target.value;
    const arry = String(value)
      .split("")
      .map((arry) => {
        return Number(arry);
      });
    const powNumbers = arry.map((a) => Math.pow(a, 2));
    const result = powNumbers.toString().replace(/,/g, "");

    console.log(result);
  };

  function squareDigits(num) {
    const n = String(num)
      .split("")
      .map((num) => {
        return Number(num);
      });
    const powNumbers = n.map((a) => Math.pow(a, 2));
    const result = Number(powNumbers.toString().replace(/,/g, ""));

    return result;
  }

  function squareDigits1(num) {
    let result = num
      .toString()
      .split("")
      .map((num) => parseInt(num))
      .map((num) => num * num)
      .join("");

    return parseInt(result);
  }

  function squareDigits2(num) {
    return Number(
      ("" + num)
        .split("")
        .map(function (val) {
          return val * val;
        })
        .join("")
    );
  }

  squareDigits(98);
  return (
    <div style={{ display: "flex" }}>
      <h1>Valor</h1>
      <input type="text" onChange={handleInput} />
    </div>
  );
}
