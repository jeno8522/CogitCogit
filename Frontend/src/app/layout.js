import React from 'react';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';

const tMoney = localFont({
  src: [
    {
      path: '../assets/fonts/TmoneyRoundWindRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TmoneyRoundWindExtraBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: '코깃코깃',
  description: 'Generated by create next app',
};

// const RootLayoutClient = dynamic(() => import('./layout.client.js'), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={tMoney.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
