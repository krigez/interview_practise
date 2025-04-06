import { useState } from "react";

const SumPage = () => {
  const [numa, setNuma] = useState(1);
  const [numb, setNumb] = useState(1);
  const [sum, setSum] = useState(null);

  const addSum = (e) => {
    e.preventDefault();

    return setSum(parseInt(numa) + parseInt(numb));
  };

  return (
    <>
      <div>Hello Sumpage</div>
      <div>
        <label> this is first input </label>
      </div>
      <div className="firstInput">
        <input
          type="number"
          value={numa}
          onChange={(e) => setNuma(e.target.value)}
        />
      </div>
      <label> this is second input </label>

      <div className="secondInput">
        <input
          type="number"
          value={numb}
          onChange={(e) => setNumb(e.target.value)}
        />
      </div>
      <div>Sum of above is {sum} </div>
      <button onClick={(e) => addSum(e)}>Click here for sum </button>
    </>
  );
};

export default SumPage;
