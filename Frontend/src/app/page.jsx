'use client';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import Header from './Header';
import Sidebar from './SideBar';

function page({ children }) {
  const [isLoggedIn, setIsLoggIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('accessToken') !== null) {
      setIsLoggIn(true);
    }
  }, []);

  useEffect(() => {
    console.log('로그인 상태 변경', isLoggedIn);
  }, [isLoggedIn]);

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

export default page;
