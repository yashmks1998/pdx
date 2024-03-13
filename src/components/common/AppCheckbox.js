import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';

export default function AppCheckbox(props) {
	const { label, checked, onChange } = props;
	return (
		<FormControlLabel
			label={label}
			sx={{
				'& .MuiFormControlLabel-label': {
					fontSize: '1.375rem',
					fontWeight: 600,
					color: '#ffffff',
					margin: 0,
					'@media (min-width:600px)': {
						fontSize: '1rem',
					},
				},
			}}
			control={
				<Checkbox
					checked={checked}
					onChange={onChange}
					sx={{
						'& .MuiSvgIcon-root': { fontSize: 28 },
						color: 'white',
						'&.Mui-checked': {
							color: 'white',
						},
					}}
				/>
			}
		/>
	);
}
