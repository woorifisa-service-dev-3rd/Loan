import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 간단한 유효성 검사
        if (!userId || !password || !userName) {
            alert('모든 필드를 채워주세요.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8081/person/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userId,
                    password: password,
                    username: userName,
                }),
            });

            if (response.ok) {
                const data = await response.text();
                alert(`${data}`);
                navigate('/');
            }
        } catch (error) {
            console.error('회원가입 중 오류 발생:', error);
            alert('회원가입 중 오류가 발생했습니다.');
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
