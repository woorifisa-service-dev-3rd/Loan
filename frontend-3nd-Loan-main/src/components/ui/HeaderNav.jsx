import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function HeaderNav() {
  const navigate = useNavigate();

  const handleMenuClick = (val) => {
    navigate(`/${val}`);
  };

  return (
    <header className="bg-white shadow-md h-16 flex items-center px-4">
      <div className="flex items-center w-full max-w-screen-xl mx-auto">
        {/* 왼쪽 정렬 항목 */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="md:hidden p-2 rounded-full text-gray-500 hover:text-gray-700"
            onClick={() => navigate('/Menu')}
            aria-label="Menu"
          >
            <i aria-hidden="true" className="mdi mdi-menu text-2xl"></i>
          </button>
          <Link to="/" className="flex items-center">
            <img src="/imsilogo.jpeg" alt="Nenoe 로고" className="h-8" />
          </Link>
        </div>

        {/* 중앙 정렬 항목 */}
        <div className="flex-grow flex justify-center space-x-4 hidden md:flex">
          <Link to="/invest" className="text-gray-700 hover:text-gray-900">
            받은 대출 목록
          </Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            대출상품
          </Link>
        </div>

        {/* 오른쪽 정렬 항목 */}
        <div className="flex items-center space-x-4 ml-auto">
          <Link to="/signup" className="hidden md:block text-gray-700 hover:text-gray-900">
            회원가입
          </Link>
          <button
            type="button"
            className="hidden md:block p-2 rounded-full text-gray-500 hover:text-gray-700"
            onClick={() => navigate('/login')}
            aria-label="Login"
          >
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
