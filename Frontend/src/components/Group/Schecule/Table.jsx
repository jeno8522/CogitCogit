'use client';

import React from "react";

import TBody from './TBody';
import THead from './THead';

const Table = () => {

	return (
		<div>
			<div className="text-xl font-bold">일정 1</div>
			<table>
				<THead></THead>
				<TBody></TBody>
			</table>
		</div>
	);

};

export default Table;