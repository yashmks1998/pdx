import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';

const ITEM_HEIGHT = 48;

function MenuIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='24px'
			viewBox='0 0 24 24'
			width='24px'
			fill='#ffffff'>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
		</svg>
	);
}

export default function MenuPanel(props) {
	const { menuItems, onSelection } = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (option) => {
		setAnchorEl(null);
		onSelection(option);
	};

	return (
		<div>
			<IconButton
				aria-label='more'
				id='long-button'
				aria-controls={open ? 'long-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup='true'
				onClick={handleClick}>
				<MenuIcon />
			</IconButton>
			<Menu
				id='long-menu'
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: '20ch',
					},
				}}>
				{menuItems.map((option) => (
					<MenuItem
						key={option}
						selected={option === 'Pyxis'}
						onClick={() => handleClose(option)}>
						{option}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
