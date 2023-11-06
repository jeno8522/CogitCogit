'use client';

import React from 'react';

import TBody from './TBody';
import THead from './THead';

const Table = () => {
  return (
    <div style={{ overflow: 'auto' }}>
      <table style={{ width: '90%', margin: '10px', textAlign: 'center', margin: '0 auto' }}>
        <THead></THead>
        <TBody></TBody>
      </table>
    </div>
  );
};

export default Table;
