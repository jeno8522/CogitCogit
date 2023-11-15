'use client';
import React, { useEffect, useState } from 'react';
import './globals.css';
import Header from './Header';
import Sidebar from './SideBar';
import { useRouter } from 'next/navigation';

function page({ children }) {
  const [isLoaded, setisLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      router.push('/login');
    } else {
      setisLoaded(true);
    }
  }, []);

  return (
    <div>
      {isLoaded ? (
        <>
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="w-full bg-[#F4F6FA]">{children}</div>
          </div>
        </>
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
}

export default page;
