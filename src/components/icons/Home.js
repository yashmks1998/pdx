import React from 'react';

export default function Home(props) {
	let { color } = props;

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
				d='M8.55847 15.5722L11.7117 11.474L15.3086 14.2994L18.3943 10.3168'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<ellipse
				cx='21.9912'
				cy='4.42493'
				rx='2.02503'
				ry='2.02503'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M16.6489 3.28706H8.99238C5.81983 3.28706 3.85266 5.53388 3.85266 8.70643V17.2212C3.85266 20.3937 5.78126 22.6309 8.99238 22.6309H18.0568C21.2293 22.6309 23.1965 20.3937 23.1965 17.2212V9.80573'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
}
