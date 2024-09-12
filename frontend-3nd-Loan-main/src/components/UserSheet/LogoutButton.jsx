// LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8081/person/logout', {
        method: 'POST',
        credentials: 'include', // 쿠키를 포함
      });
      if (response.ok) {
        alert('로그아웃 성공');
        // 로그인 페이지로 리디렉션
        navigate('/login');
      } else {
        alert('로그아웃 중 오류 발생');
      }
    } catch (err) {
      console.error('로그아웃 중 오류 발생:', err);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  return (
    <button
      type="button"
      className="hidden md:block p-2 rounded-full text-gray-500 hover:text-gray-700"
      onClick={handleLogout}
      aria-label="Logout"
    >
      로그아웃
    </button>
  );
};