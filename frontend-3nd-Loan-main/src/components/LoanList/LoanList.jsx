import React, { useState, useEffect } from 'react';
import { LoanItem } from './LoanItem';

export const LoanList = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await fetch('http://localhost:8081/product'); // 서버에서 대출 리스트 가져오기
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
    setFilteredLoans(loans); // 대출 목록이 업데이트되면 필터링된 목록도 업데이트
  }, [loans]);

  return (
    <div className="min-h-screen flex justify-center items-center p-1">
      <div className="w-screen h-screen flex flex-col">
        <div className="flex-grow overflow-hidden">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <ul className="px-0 my-0 overflow-y-auto h-full scrollbar-hidden">
            {filteredLoans.map((loan) => (
              <LoanItem key={loan.id} loan={loan} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};