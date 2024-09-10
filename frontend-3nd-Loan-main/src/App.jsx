import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import './App.css';
import './styles/global.css'; // Tailwind와 커스텀 글로벌 CSS 포함
import HeaderNav from './components/ui/HeaderNav'; // HeaderNav 경로를 확인하세요
import { LoanContext, LoanDispatchContext } from './contexts/Loancontext.jsx';
import { LoanList } from './components/LoanList/LoanList.jsx';
import { LoginForm } from './components/UserSheet/LoginForm';
import { SignUpForm } from './components/UserSheet/SignUpForm';

const initialLoanProducts = [
  // {
  //   id: 1,
  //   name: "소액 대출",
  //   interestRate: 3.5,
  //   maxLimit: 5000000,
  //   repaymentPeriod: "1년",
  //   features: ["빠른 승인", "모바일 신청"],
  //   applicationMethods: ["모바일", "인터넷"],
  //   requiredCreditScore: 650,
  //   provider: "P2P 제공자",
  // },
  // {
  //   id: 2,
  //   name: "중액 대출",
  //   interestRate: 4.0,
  //   maxLimit: 10000000,
  //   repaymentPeriod: "2년",
  //   features: ["쿠폰 제공", "빠른 승인"],
  //   applicationMethods: ["인터넷"],
  //   requiredCreditScore: 700,
  //   provider: "은행 B",
  // },
  // {
  //   id: 3,
  //   name: "대규모 대출",
  //   interestRate: 4.5,
  //   maxLimit: 20000000,
  //   repaymentPeriod: "3년",
  //   features: ["직접 거래", "서류 없음"],
  //   applicationMethods: ["모바일", "인터넷"],
  //   requiredCreditScore: 750,
  //   provider: "저축은행 A",
  // },
];


const reducer = (loans, action) => {
  switch (action.type) {
    case 'ADD':
      return [...loans, action.newLoan];
    default:
      return loans;
  }
};

function App() {
  const [loans, dispatch] = useReducer(reducer, initialLoanProducts);

  return (
    <Router>
      <HeaderNav />
      <LoanContext.Provider value={loans}>
        <LoanDispatchContext.Provider value={dispatch}>
          <Routes>
            <Route path="/" element={<LoanList />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            {/* Add other routes as needed */}
          </Routes>
        </LoanDispatchContext.Provider>
      </LoanContext.Provider>
    </Router>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/LoanList');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>대출 상품 목록 보기</button>
    </div>
  );
}

export default App;
