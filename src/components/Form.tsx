import React, { useEffect, useState } from "react";
import useMultiForm from "../hooks/useMultiForm";

const Form = () => {
  const { step, steps, prevPage, nextPage, goToPage } = useMultiForm([
    <div>aaaaa</div>,
    <div>bbbbb</div>,
    <div>ccccccc</div>,
  ]);

  const [currentPage, setCurrentPage] = useState(goToPage(step));
  console.log(currentPage);

  return (
    <div>
      <div>
        {step}/{steps.length - 1}
      </div>
      <div>{currentPage}</div>
      <button
        className="bg-green-500 px-5 py-3 rounded-sm"
        onClick={() => {
          prevPage();
          setCurrentPage(goToPage(step - 1));
        }}
      >
        Previous
      </button>
      <button
        className="bg-green-500 px-5 py-3 rounded-sm ml-4"
        onClick={() => {
          nextPage();
          setCurrentPage(goToPage(step + 1));
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Form;
