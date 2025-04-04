import { useState, useEffect } from "react";

const SumPage = () => {
  const [numa, setNuma] = useState(null);
  const [numb, setNumb] = useState(null);
  const [sum, setSum] = useState(null);

  const handleSearch = (num, type) => {
    e.preventDefault();
    // if ((type = "a")) setNuma(num);
  };

  const addSum = (e) => {
    e.preventDefault();
    // return setSum(numa + numb);
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
          value="numa"
          onChange="{e => handleSearch(e.target.value, 'a')}"
        />
      </div>
      <label> this is second input </label>

      <button onClick={(e) => addSum(e)}>Click here for sum </button>
      <div className="secondInput">
        <input
          type="number"
          value="numb"
          onChange="{e => handleSearch(e.target.value, 'b'})"
        />
      </div>
      <div>Sum of above is {sum} </div>
    </>
  );
};

export default SumPage;
