// LoanApplyButton.jsx
import React from 'react';

export const LoanApplyButton = ({ loanId, onApply }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      onClick={() => onApply(loanId)}
    >
      대출받기
    </button>
  );
};