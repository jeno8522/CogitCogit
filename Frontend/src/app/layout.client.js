'use client';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';

export default function RootLayoutClient({ children }) {
  const isLoggedIn = localStorage.getItem('accessToken') !== null;

  useEffect(() => {
    if (window.location.href.includes('redirect?code=')) {
      console.log('리다이렉트를 포함한 URL');
    }
  }, []);

  useEffect(() => {
    console.log('로그인 상태가 변경됨');
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn || window.location.href.includes('redirect?code=') ? (
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
