'use client';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';

export default function RootLayoutClient({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 클라이언트 측에서만 실행되는 코드
    const storedToken = localStorage.getItem('accessToken');
    console.log('Access Token:', storedToken);
    setIsLoggedIn(!!storedToken); // !!를 사용하여 null이나 undefined를 false로 변환
  }, []);

  useEffect(() => {
    console.log('로그인 상태 변경 확인');
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  // if (!isLoggedIn) {
  //   return <Login />;
  // }

  return (
    <div>
      <Header />
      {isLoggedIn ? (
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-[#F4F6FA]">{children}</div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
