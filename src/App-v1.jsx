import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Appv1() {
  return (
    <div>
      <Step />
      <Step />
    </div>
  );
}

function Step() {
  const [step, SetStep] = useState(1);
  const [isOpen, SetIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) SetStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      SetStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => SetIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Nesxt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
