import React, { ReactElement, useState } from "react";

function useMultiForm(steps: ReactElement[]) {
  const [step, setStep] = useState(0);

  function prevPage() {
    if (step <= 0) return setStep(0);
    return setStep((step) => step - 1);
  }

  function nextPage() {
    if (step > steps.length - 2) return setStep(steps.length - 1);
    return setStep((step) => step + 1);
  }

  function goToPage(step: number) {
    if (step <= 0) {
      return steps[0];
    }
    if (step >= steps.length - 1) {
      return steps[steps.length - 1];
    }
    return steps[step];
  }

  console.log(step);
  return { step, steps, nextPage, prevPage, goToPage };
}

export default useMultiForm;
