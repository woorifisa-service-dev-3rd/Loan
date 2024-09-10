import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // 로그인 로직을 여기에 추가하세요
        // 예를 들어, ID와 비밀번호가 정확한지 확인하고,
        // 로그인 성공 시 적절한 처리를 하세요

        if (userId === 'admin' && password === 'password') { // 예제 조건
            navigate('/dashboard'); // 로그인 성공 시 리다이렉트할 경로
        } else {
            alert('로그인 실패! 사용자 ID와 비밀번호를 확인해주세요.');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">로그인</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="userId" className="block text-gray-700">사용자 ID</label>
                        <input
                            type="text"
                            id="userId"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
};
