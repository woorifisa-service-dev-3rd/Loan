import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import { LoanItem } from './LoanItem';
import { LoanApplyButton } from './LoanApplyButton';
import { getCookie } from '../UserSheet/cookies';

export const LoanList = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // useNavigate 추가

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

    fetchLoans();
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      const userId = getCookie('userid');
      setIsLoggedIn(!!userId);
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    console.log('Is Logged In:', isLoggedIn);
  }, [isLoggedIn]);

  const handleLoanApply = async (loanId) => {
    try {
      const response = await fetch(`http://localhost:8081/loan/${loanId}`, {
        method: 'POST',
        credentials: 'include',
      });
      const result = await response.text();
      
      if (response.ok) {
        if (result === '대출 성공') {
          alert(result);
          // 대출 성공 후 페이지를 갱신하거나 다른 작업을 수행할 수 있습니다.
        } else {
          alert(result); 
        }           
        navigate('/');
      } else {
        throw new Error(result);
      }
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
                onApply={handleLoanApply}
              />
            ))}
          </ul>
          {isLoggedIn && (
            <div className="flex justify-center p-4">
              {/* Apply button for each loan item */}
              {filteredLoans.map((loan) => (
                <LoanApplyButton
                  key={loan.id}
                  loanId={loan.id}
                  onApply={handleLoanApply}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
