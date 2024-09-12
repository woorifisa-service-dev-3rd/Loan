import React, { useEffect, useState } from "react";
import { LoanItem } from "./LoanItem";
import { getCookie } from "../UserSheet/cookies";

export const UserLoanList = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filteredLoans, setFilteredLoans] = useState([]);
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await fetch("http://localhost:8081/loan/loanlist", {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch loans");
        }
        const data = await response.json();
        const formattedLoans = data.map((item) => ({
          id: item.loan_id,
          company: item.productResponse.company,
          title: item.productResponse.title,
          min_rate: item.productResponse.min_rate,
          max_limit: item.productResponse.max_limit,
        }));
        setLoans(formattedLoans);
        setFilteredLoans(formattedLoans);
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
      const userId = getCookie("userid");
      setIsLoggedIn(!!userId);
    };

    checkLoginStatus();
  }, []);
  useEffect(() => {
    console.log("Is Logged In:", isLoggedIn);
  }, [isLoggedIn]);
  return (
    <div className="min-h-screen flex justify-center items-center p-1">
      <div className="w-screen h-screen flex flex-col">
        <div className="flex-grow overflow-hidden">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <ul className="px-0 my-0 overflow-y-auto h-full scrollbar-hidden">
            {filteredLoans.map((loan) => (
              <LoanItem key={loan.id} loan={loan} isUserLoan={true} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
