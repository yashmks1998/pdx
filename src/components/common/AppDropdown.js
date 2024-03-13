import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

export default function AppDropdown(props) {
	const { items, id, labelId, value, label, handleChange, variant, type } =
		props;
	return (
		<FormControl fullWidth>
			<InputLabel id={id}>{label}</InputLabel>
			<Select
				variant={variant}
				labelId={labelId}
				id={id}
				value={value}
				label={label}
				onChange={handleChange}
				// inputProps={
				// 	type === 'secondary' && {
				// 		MenuProps: {
				// 			MenuListProps: {
				// 				sx: {
				// 					backgroundColor: '#D9D9D9',
				// 					color: '#161717',
				// 					'&:focus': {
				// 						color: '#161717',
				// 					},
				// 					'&:hover': {
				// 						color: '#161717',
				// 					},
				// 				},
				// 			},
				// 		},
				// 	}
				// }
				sx={
					type === 'secondary'
						? {
								backgroundColor: '#D9D9D9',
								color: '#161717',
								'&:focus': { outline: 'none' },
								'.MuiSelect-icon': {
									color: '#161717',
								},
						  }
						: {
								backgroundColor: '#3E3F47',
						  }
				}>
				{items.map((item) => (
					<MenuItem key={item.value} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
