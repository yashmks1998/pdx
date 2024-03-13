import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';

function LinearProgressWithLabel(props) {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ width: '100%', mr: 1 }}>
				<LinearProgress
					variant='determinate'
					{...props}
					sx={{
						backgroundColor: '#212121',
						height: 7,
						borderRadius: 3,
						'& .MuiLinearProgress-bar': {
							backgroundColor: '#ffffff',
						},
					}}
				/>
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography
					noWrap
					variant='body2'
					color='text.secondary'>{`${Math.round(
					props.value
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and buffer variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

export default function ProgressBar(props) {
	const { progress } = props;

	return (
		<Box sx={{ width: '100%' }}>
			<LinearProgressWithLabel value={progress} />
		</Box>
	);
}
