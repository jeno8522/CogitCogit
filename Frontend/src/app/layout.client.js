'use client';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function RootLayoutClient({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  function parseAccessCode(url) {
    if (url.match(/\?error=(.+)/)) {
      // TODO: 오류 알림을 띄우고 창을 닫아야함
      return null;
    } else {
      // eslint-disable-next-line
      const accessCode = url.match(/\?code=([\w\/\-]+)/);
      if (accessCode) {
        return accessCode[1];
      }
    }
  }

  const sendCodeToBackend = async (code) => {
    localStorage.setItem('test', 'abcd');
    const bearer = process.env.NEXT_PUBLIC_BEARER;
    try {
      // const response = await fetch(`http://localhost:8080/auth/regist?code=${code}`);
      const response = await fetch(`http://localhost:8080/auth/regist?code=${code}`, {
        method: 'GET',
        // headers: {
        //   Authorization: `Bearer ${bearer}`,
        // },
      });
      console.log('response ====', response);
      if (response.ok) {
        console.log('로그인 백에다가 요청~~', response);
        const accessToken = response.headers.get('Authorization');
        const refreshToken = response.headers.get('RefreshToken');
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        console.log('저장된 accessToken ====== ', accessToken);
        //우리 메인페이지로 이동하고 싶다.
        setIsLoggedIn(true);
        router.push('/');
      } else {
        console.error('Failed to authenticate');
      }
    } catch (error) {
      console.error('Error sending code to backend:', error);
    }
  };

  useEffect(() => {
    // 클라이언트 측에서만 실행되는 코드
    const storedToken = localStorage.getItem('accessToken');
    console.log('Access Token:', storedToken);
    setIsLoggedIn(!!storedToken); // !!를 사용하여 null이나 undefined를 false로 변환

    if (window.location.href.includes('redirect?code=')) {
      console.log('코드를 포함한 사이트');
      const code = parseAccessCode(window.location.href);
      sendCodeToBackend(code);
    }
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
      {isLoggedIn ? (
        <>
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="w-full bg-[#F4F6FA]">{children}</div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
