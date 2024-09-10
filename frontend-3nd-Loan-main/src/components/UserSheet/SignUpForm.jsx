import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // 간단한 유효성 검사
        if (!userId || !password || !nickname) {
            alert('모든 필드를 채워주세요.');
            return;
        }

        // 회원가입 처리 로직을 여기에 추가하세요
        // 예를 들어, 사용자 정보를 서버로 전송하고, 성공 시 적절한 처리를 하세요

        // 예제: 회원가입 성공 시 대시보드 페이지로 리다이렉트
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">회원가입</h2>
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
                    <div className="mb-4">
                        <label htmlFor="nickname" className="block text-gray-700">닉네임</label>
                        <input
                            type="text"
                            id="nickname"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        회원가입
                    </button>
                </form>
            </div>
        </div>
    );
};
