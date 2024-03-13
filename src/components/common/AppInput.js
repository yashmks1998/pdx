import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';

export default function AppInput(props) {
	const { id, label, type, placeholder, value, onChange, required } = props;

	return (
		<div className='app-flex mb-2'>
			<Typography noWrap variant='label' className='w-30'>
				{label}
			</Typography>
			<div className='w-70'>
				<TextField
					id={id}
					name={id}
					type={type}
					placeholder={placeholder}
					variant='outlined'
					value={value}
					onChange={onChange}
					required={required}
					fullWidth={true}
					sx={{
						// Root class for the input field
						'& .MuiOutlinedInput-root': {
							fontSize: '22px',
							border: '0.5px solid #ffffff',
							borderRadius: '12px',
							height: '2.375rem',
							// Class for the border around the input field
							'& .MuiOutlinedInput-notchedOutline': {
								border: '0.5px solid #ffffff',
								borderRadius: '12px',
							},
						},
					}}
				/>
			</div>
		</div>
	);
}
