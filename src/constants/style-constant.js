export const getStyles = (
	borderRadius,
	activeBGColor,
	hoverBGColor,
	bgColor
) => {
	return {
		'&:before': {
			content: '""',
			background:
				'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
			position: 'absolute',
			top: '-2px',
			left: '-2px',
			backgroundSize: '400%',
			zIndex: -1,
			filter: 'blur(5px)',
			width: 'calc(100% + 4px)',
			height: 'calc(100% + 4px)',
			animation: 'glowing 20s linear infinite',
			opacity: 0,
			transition: 'opacity .3s ease-in-out',
			borderRadius: borderRadius || 4,
		},
		'&:active': {
			backgroundColor: activeBGColor,
		},
		'&:active:after': {
			background: 'transparent',
		},
		'&:hover': {
			backgroundColor: hoverBGColor,
		},
		'&:hover:before': {
			opacity: 1,
		},
		'&:after': {
			zIndex: -1,
			content: '""',
			position: 'absolute',
			width: '100%',
			height: '100%',
			background: bgColor,
			left: 0,
			top: 0,
			borderRadius: borderRadius || 4,
		},
		'@keyframes glowing': {
			'0%': { backgroundPosition: '0 0' },
			'50%': { backgroundPosition: '400% 0' },
			'100%': { backgroundPosition: '0 0' },
		},
	};
};
