// LoanApplyButton.jsx
import React from "react";

export const LoanApplyButton = ({ loanId, onApply, disabled }) => {
  return (
    <button
      onClick={() => onApply(loanId)}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg ${
        disabled ? "bg-white-400 cursor-not-allowed" : "bg-blue-500 text-white"
      }`}
    >
      <span className={disabled ? "invisible" : "visible"}>대출받기</span>
    </button>
  );
};
