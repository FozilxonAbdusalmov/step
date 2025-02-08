import PropTypes from "prop-types";
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step{step}</h3>
      {children}
    </div>
  );
}

export default StepMessage;
