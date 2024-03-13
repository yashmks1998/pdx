import React from 'react';

export default function Folder(props) {
	let { color } = props;

	// TO DO: Replace icon svg
	switch (color) {
		case 'active':
			color = '#000000';
			break;
		default:
			color = '#8A8A8A';
			break;
	}

	return (
		<svg
			width='27'
			height='26'
			viewBox='0 0 27 26'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M19.7707 11.4797C21.2403 11.2732 22.3718 10.0132 22.3749 8.48667C22.3749 6.98227 21.2782 5.73493 19.8402 5.49895'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M21.71 15.0127C23.1332 15.2255 24.1267 15.7238 24.1267 16.7509C24.1267 17.4578 23.6589 17.9172 22.9025 18.2058'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M13.4486 15.4483C10.0627 15.4483 7.17084 15.9613 7.17084 18.0104C7.17084 20.0584 10.0448 20.5862 13.4486 20.5862C16.8346 20.5862 19.7254 20.0784 19.7254 18.0283C19.7254 15.9782 16.8525 15.4483 13.4486 15.4483Z'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M13.4486 12.5239C15.6705 12.5239 17.4719 10.7235 17.4719 8.50057C17.4719 6.27875 15.6705 4.47726 13.4486 4.47726C11.2268 4.47726 9.42532 6.27875 9.42532 8.50057C9.41689 10.715 11.2047 12.5165 13.4191 12.5239H13.4486Z'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M7.12567 11.4797C5.65499 11.2732 4.52458 10.0132 4.52142 8.48667C4.52142 6.98227 5.61811 5.73493 7.05614 5.49895'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M5.18626 15.0127C3.76298 15.2255 2.76953 15.7238 2.76953 16.7509C2.76953 17.4578 3.23728 17.9172 3.9937 18.2058'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
}
