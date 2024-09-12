import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUsername] = useState('');
    const [isUserIdValid, setIsUserIdValid] = useState(true);
    const [isUserNameValid, setIsUserNameValid] = useState(true);
    const [userIdChecked, setUserIdChecked] = useState(false);
    const [userNameChecked, setUserNameChecked] = useState(false);
    const navigate = useNavigate();

    const checkUserId = async () => {
        if (!userId) {
            alert('사용자 ID를 입력해주세요.');
            return;
        }
        try {
            const response = await fetch(`http://localhost:8081/person/id_check/${userId}`);
            const isDuplicate = await response.json();
            setIsUserIdValid(isDuplicate);
            setUserIdChecked(true);
            return isDuplicate;
        } catch (error) {
            console.error('ID 중복 체크 중 오류 발생:', error);
            setIsUserIdValid(false);
            setUserIdChecked(true);
            return false;
        }
    };

    const checkUserName = async () => {
        if (!userName) {
            alert('닉네임을 입력해주세요.');
            return;
        }
        try {
            const response = await fetch(`http://localhost:8081/person/nick_check/${userName}`);
            const isDuplicate = await response.json();
            setIsUserNameValid(isDuplicate);
            setUserNameChecked(true);
            return isDuplicate;
        } catch (error) {
            console.error('닉네임 중복 체크 중 오류 발생:', error);
            setIsUserNameValid(false);
            setUserNameChecked(true);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId || !password || !userName) {
            alert('모든 필드를 채워주세요.');
            return;
        }

        const isUserIdAvailable = await checkUserId();
        const isUserNameAvailable = await checkUserName();

        if (!isUserIdAvailable) {
            alert('이미 사용 중인 사용자 ID입니다.');
            return;
        }
        if (!isUserNameAvailable) {
            alert('이미 사용 중인 닉네임입니다.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8081/person/signup', {
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
                alert(data);
                navigate('/');
            } else {
                alert('회원가입 중 오류가 발생했습니다.');
            }
        } catch (error) {
            console.error('회원가입 중 오류 발생:', error);
            alert('회원가입 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="userId" className="block text-gray-700">사용자 ID</label>
                        <div className="flex">
                            <input
                                type="text"
                                id="userId"
                                value={userId}
                                onChange={(e) => {
                                    setUserId(e.target.value);
                                    setIsUserIdValid(true);
                                    setUserIdChecked(false);
                                }}
                                className={`w-full p-2 border ${isUserIdValid ? 'border-gray-300' : 'border-red-500'} rounded`}
                                required
                            />
                            <button
                                type="button"
                                onClick={checkUserId}
                                className="ml-2 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap"
                            >
                                중복체크
                            </button>
                        </div>
                        {userIdChecked && !isUserIdValid && (
                            <p className="text-red-500 text-sm">이미 사용 중인 사용자 ID입니다.</p>
                        )}
                        {userIdChecked && isUserIdValid && (
                            <p className="text-green-500 text-sm">사용 가능한 사용자 ID입니다.</p>
                        )}
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
                        <label htmlFor="userName" className="block text-gray-700">닉네임</label>
                        <div className="flex">
                            <input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    setIsUserNameValid(true);
                                    setUserNameChecked(false);
                                }}
                                className={`w-full p-2 border ${isUserNameValid ? 'border-gray-300' : 'border-red-500'} rounded`}
                                required
                            />
                            <button
                                type="button"
                                onClick={checkUserName}
                                className="ml-2 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap"
                            >
                                중복체크
                            </button>
                        </div>
                        {userNameChecked && !isUserNameValid && (
                            <p className="text-red-500 text-sm">이미 사용 중인 닉네임입니다.</p>
                        )}
                        {userNameChecked && isUserNameValid && (
                            <p className="text-green-500 text-sm">사용 가능한 닉네임입니다.</p>
                        )}
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
