// LoanList.jsx
import React, { useState, useEffect } from 'react';
import { LoanItem } from './LoanItem';

export const LoanList = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await fetch('http://localhost:8081/product');
        if (!response.ok) {
          throw new Error('Failed to fetch loans');
        }
        const data = await response.json();
        setLoans(data);
        setFilteredLoans(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const checkSession = async () => {
      try {
        const response = await fetch('http://localhost:8081/person/sessioncheck', {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to check session');
        }
        const result = await response.json();
        setIsLoggedIn(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLoans();
    checkSession();
  }, []);

  useEffect(() => {
    setFilteredLoans(loans);
  }, [loans]);

  const handleLoanApply = async (loanId) => {
    try {
      const response = await fetch(`http://localhost:8081/loan/${loanId}`, {
        method: 'POST',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to apply for loan');
      }
      const result = await response.text();
      alert(result); // 서버로부터 받은 응답을 alert로 표시
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-1">
      <div className="w-screen h-screen flex flex-col">
        <div className="flex-grow overflow-hidden">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <ul className="px-0 my-0 overflow-y-auto h-full scrollbar-hidden">
            {filteredLoans.map((loan) => (
              <LoanItem
                key={loan.id}
                loan={loan}
                onApply={handleLoanApply} // 대출받기 핸들러 전달
              />
            ))}
          </ul>
          {isLoggedIn && (
            <div className="flex justify-center p-4">
              {/* 로그인 상태에 따라 대출받기 버튼이 렌더링됨 */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
